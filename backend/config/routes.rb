Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      resources :users
      resources :recipes
      resources :search
      resources :ingredients
      resources :user_ingredients
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
