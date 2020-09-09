class BlogsController < ApplicationController


    def index
        @post = Blog.all
        render json: @post, each_serializer: BlogSerializer
    end


    def create
        @post = Blog.create(blog_params)
        if @post.valid?
            render json:@post
        else
            render json: {:errors => @post.errors.full_messages}
        end
    end

    def edit
    end



    private
    
    def blog_params
        params.require(:blog).permit(:post, :user_id)
    end

    def belong_to_user?
        @post.user_id == session[:user_id]
    end
end
