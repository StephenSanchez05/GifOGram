class SessionsController < ApplicationController

    def create
        @user = User.find_or_create_by(user_params)
        if @user.valid?
            session[:user_id] = @user.id  
            @fUser = {
                id: @user.id,
                username: @user.username,
                }
            render json: {user: @fUser}
        else
            render json: {
                error: {error: " Username not filled in"}, status: 404
            }
        end

    end

    def destroy
        session.delete("user_id")
        redirect_to root_path
      end

    def user_params
        params.require(:user).permit(:username)
    end

end
