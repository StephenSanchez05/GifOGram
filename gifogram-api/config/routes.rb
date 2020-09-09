Rails.application.routes.draw do
  
  resources :users 
  resources :blogs


  post '/login' => "sessions#create"
end
