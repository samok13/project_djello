class CardsController < ApplicationController

  def index
    @cards = Card.where(list_id: params[:list_id]).order(:created_at => :desc)

    respond_to do |format|
      format.json { render json: @cards.to_json(:include => :members) }
    end
  end

  def create
    @card = Card.new(card_params)

    respond_to do |format|
      if @card.save
        format.json { render json: @card.to_json }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

private

  def card_params
    params.require(:card).permit(:title, :description, :list_id)
  end

end
