Rails.application.routes.draw do


  get 'safety/show'

  resources :car_datas
  resources :years

  get 'welcome/index'

  resource :welcome do

    get 'get_reviews', to: "welcome#get_reviews"

    get 'safety', to: "welcome#safety"

    get 'averageRating', to: "welcome#averageRating"

    get 'authors', to: "welcome#authors"

  end

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
