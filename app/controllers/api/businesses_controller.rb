class Api::BusinessesController < ApplicationController

  before_action :require_logged_in, only: [:create, :update]

  def index
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find(params[:id])
  end

  def create
    @business = Business.new(business_params)
    if @business.save
      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def update
    @business = Business.find_by(id: params[:id])
    if @business.update(business_params)
      render "/api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  private

  def business_params
    params.require(:business).permit(
      :name, :category, :address, :city, 
      :state, :zip_code, :phone_number)
  end



end
