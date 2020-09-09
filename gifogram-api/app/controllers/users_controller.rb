class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def show
        @user = User.find(params[:id])
    end


    def create
    end
end
