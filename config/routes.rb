Rails.application.routes.draw do
  root "site#index"
  get '/welcome', to: "welcome#show"
end
