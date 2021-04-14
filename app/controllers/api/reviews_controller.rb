class Api::ReviewsController < ApplicationController
  
  def index
    @reviews = Review.all
    render :index
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])
    if @review && @review.update(review_params)
      render :show
    else
      render json: ['Cannot update this review'], status: 422
    end
  end

  def destroy
    @review = current_user.review.find_by(id: params[:id])
    if @review && @review.destroy
      render :show
    else
      render json: ['You cannot delete this review'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(
      :business_id, :body, :rating)
  end
end
