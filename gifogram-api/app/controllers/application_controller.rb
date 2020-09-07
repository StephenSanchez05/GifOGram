class ApplicationController < ActionController::API
    include ::ActionController::Cookies


    def redirect_if_not_logged_in
        if !logged_in?
          redirect_to root_path
        end
      end

    def current_user
        User.find(session[:user_id])
    end

    def logged_in?
        !!session[:user_id]
    end



end
