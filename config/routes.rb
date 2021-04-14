Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, default: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show, :create, :update]
    resources :reviews, only: [:index, :create, :update, :destroy]
  end
  
end
