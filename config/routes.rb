Rails.application.routes.draw do


  resources :car_datas
  resources :years

  get 'welcome/index'

  resource :welcome do

    post 'get_reviews'
  end
  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
