class Api::ReviewsController < ApplicationController
  
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find(params[:id])
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
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    if @review && @review.destroy
      render :show
    else
      render json: ['You cannot delete this review'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(
      :author_id, :business_id, :body, :rating)
  end
end
