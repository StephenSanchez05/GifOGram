Rails.application.routes.draw do
  resources :blogs
  resources :users
  post '/login' => "sessions#create"
end
