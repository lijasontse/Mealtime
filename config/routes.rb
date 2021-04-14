Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, default: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show] 
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end
  
end
