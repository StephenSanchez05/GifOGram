class SessionsController < ApplicationController

    def create
        @user = User.find_by(:username => params[:user][:username])
        if @user && @user.authenticate(params[:user][:password])
            token = encode_token(@user)
            cookies.signed[:jwt] = {value: token, httponly: true}
            @fUser = {
                id: @user.id,
                username: @user.username,
                token: token
                }
            render json: {user: @fUser}
        else
            render json: {
                error: {error: "Username or Password incorrect"}, status: 404
            }
        end

    end




end
