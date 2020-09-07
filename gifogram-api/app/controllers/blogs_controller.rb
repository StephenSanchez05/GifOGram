class BlogsController < ApplicationController


    def index
    end


    def create
        @user = User.find(session[:user_id])
        @post = Blog.create(blog_params)
        @post.update(user_id: @user.id)
        if @post.valid?
            render json:@post
        else
            render json: {:errors => @post.errors.full_messages}
        end
    end

    def edit
        @user = User.find(session[:user_id])
        @post = Blog.find(params[:id])



    private
    
    def blog_params
        params.require(:blog).permit(:post, :user_id)
    end

    def belong_to_user?
        @post.user_id == session[:user_id]
    end
end
