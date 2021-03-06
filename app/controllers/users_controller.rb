class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.json { render json: @user.to_json(:include=> [:boards, :lists]) }
    end
  end

end
