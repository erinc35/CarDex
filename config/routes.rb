Rails.application.routes.draw do


  resources :car_datas, :years

  get 'welcome/index'
  get 'car_datas/create'


  post 'years/create'
  get 'years/create'


  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
