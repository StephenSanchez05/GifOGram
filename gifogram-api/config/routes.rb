Rails.application.routes.draw do
  
  resources :gifs
  resources :users 
  resources :blogs


  post '/login' => "sessions#create"
end
