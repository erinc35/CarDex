Rails.application.routes.draw do

  resources :car_datas

  get 'car_datas/show'

  get 'welcome/index'



  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
