Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :home, only: [:index]
      resources :workouts do
        resources :exercises, shallow: true, only: [:create, :destroy]
        resources :comments, shallow: true, only: [:create, :destroy]
      end
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        # get :current -> /api/v1/users/:user_id/current
        get :current, on: :collection # -> /api/v1/users/current
      end
    end
    #The below route will match any URL that hasn't been matched
    #already inside of the "/api" namespace
    #The "*" prefix in the routes path allows this route wildcard
    # to match anything
    #The "via" argument is required and is used to specify which method this route applies to
    # Example:  via: [:get, :post, :patch]
    #via: :all  will match all possible methods
    match "*unmatched_route", to: "application#not_found", via: :all
  end
end
