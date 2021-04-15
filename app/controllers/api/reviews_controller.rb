class Api::ReviewsController < ApplicationController
  
  before_action :require_logged_in, only: [:create, :show, :update, :destroy]

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review && @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy

    render :show
  end

  private
  def review_params
    params.require(:review).permit(
      :author_id, :business_id, :body, :rating)
  end
  
end
