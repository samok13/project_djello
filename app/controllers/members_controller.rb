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

# private

#   def members_params
#     params.require(:members).permit(:card_id)
#   end

end
