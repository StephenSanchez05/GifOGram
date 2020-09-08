class BlogsController < ApplicationController


    def index
        @post = Blogs.all
        render json:score
    end


    def create
        # @user = User.find(params[:id])
        @post = Blog.create(blog_params)
        # @post.update(user_id: @user.id)
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
