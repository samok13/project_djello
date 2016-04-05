class MembersController < ApplicationController

  def index
    if(params[:card_id])
      @members = Membership.where(card_id: params[:card_id]).map{|membership| membership.user}
    else
      @members = User.all
    end

    respond_to do |format|
      format.json { render json: @members.to_json }
    end
  end

  def create
    @member = Membership.new(members_params)

    respond_to do |format|
      if @member.save
        format.json { render json: @member.to_json }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

private

  def members_params
    params.require(:members).permit(:card_id, :user_id)
  end

end
