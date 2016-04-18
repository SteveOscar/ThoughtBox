class Api::V1::BaseController < ApplicationController
  helper_method :current_user?, :current_user
  respond_to :json

  def current_user
    session[:user_id]
  end

  def current_user?
    unless current_user
      redirect_to welcome_path
    end
  end

end
