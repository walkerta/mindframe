# == Route Map
#
#  Prefix Verb   URI Pattern            Controller#Action
# entries GET    /entries(.:format)     entries#index
#         POST   /entries(.:format)     entries#create
#   entry GET    /entries/:id(.:format) entries#show
#         PATCH  /entries/:id(.:format) entries#update
#         PUT    /entries/:id(.:format) entries#update
#         DELETE /entries/:id(.:format) entries#destroy
#   users GET    /users(.:format)       users#index
#         POST   /users(.:format)       users#create
#    user GET    /users/:id(.:format)   users#show
#         PATCH  /users/:id(.:format)   users#update
#         PUT    /users/:id(.:format)   users#update
#         DELETE /users/:id(.:format)   users#destroy
# 

Rails.application.routes.draw do
  resources :entries
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
