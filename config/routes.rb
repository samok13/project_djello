Rails.application.routes.draw do

  root 'static_pages#index'

  devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
      devise_scope :user do
        get "sign_up", to: 'devise/registrations#new'
        get "sign_in", to: "devise/sessions#new"
        get "login", :to => "devise/sessions#new"
        delete "sign_out", :to => "devise/sessions#destroy"
        delete "logout", :to => "devise/sessions#destroy"
      end 

  authenticate :user do
    resources :static_pages, only: [:index]
  end

  scope :api do
    scope :v1 do
      resources :boards
      resources :users
      resources :lists
      resources :cards
      resources :members
    end
  end

  # devise_for :users, controllers: {
  #       sessions: 'users/sessions'
  #     }

  # root 'static_pages#index'
  # # devise_for :users

  # devise_scope :user do
  #   get "sign_up", to: 'devise/registrations#new'
  #   get "sign_in", to: "devise/sessions#new"
  #   get "login", :to => "devise/sessions#new"
  #   delete "sign_out", :to => "devise/sessions#destroy"
  #   delete "logout", :to => "devise/sessions#destroy"
  # end  

  # authenticate :user do
  #   resources :static_pages, only: [:index]
  # end

  # root :to => 'registrations#new'


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
