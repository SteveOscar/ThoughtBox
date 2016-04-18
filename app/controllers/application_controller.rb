class ApplicationController < ActionController::Base
  helper_method :current_user?, :current_user

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def current_user?
    unless current_user
      redirect_to welcome_path
    end
  end


end
