class CardsController < ApplicationController

  def index
    @cards = Card.where(list_id: params[:list_id])

    respond_to do |format|
      format.json { render json: @cards.to_json }
    end
  end

end
