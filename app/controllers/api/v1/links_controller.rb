class Api::V1::LinksController < Api::V1::BaseController
    def index
      respond_with Link.where(user_id: params[:user_id])
    end

    def create
      respond_with :api, :v1, Link.create(link_params)
    end

    def destroy
      respond_with Link.destroy(params[:id])
    end

    def update
      respond_with Link.update(params[:id], link_params)
    end

   private

    def link_params
      params.require(:link).permit(:title, :url, :user_id)
    end
  end
