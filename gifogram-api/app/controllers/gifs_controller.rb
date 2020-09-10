class GifsController < ApplicationController

    def index
        @gif = Gif.all
        render json: @gif, each_serializer: GifSerializer
    end


    def create
        @gif = Gif.create(gif_params)
        if @gif.valid?
            render json:@gif
        else
            render json: {:errors => @gif.errors.full_messages}
        end
    end



    private
    
    def gif_params
        params.require(:gif).permit(:url, :blog_id)
    end
end
