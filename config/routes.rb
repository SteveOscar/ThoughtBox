Rails.application.routes.draw do
  root "site#index"
  get '/welcome', to: "welcome#show"
  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
  get '/logout', to: "sessions#destroy"
  resources :users, only: [:new, :create]
  
  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :links, defaults: {format: :json}
    end
  end
end
