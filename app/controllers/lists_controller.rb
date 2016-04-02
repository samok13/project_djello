class ListsController < ApplicationController

  def index
    @lists = List.where(board_id: params[:board_id])

    respond_to do |format|
      format.json { render json: @lists.to_json }
    end
  end

end
