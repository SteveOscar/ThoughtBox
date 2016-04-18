Rails.application.routes.draw do
  root "site#index"
  get '/welcome', to: "welcome#show"
  get '/login', to: "sessions#new"
  resources :users, only: [:new, :create]
end
