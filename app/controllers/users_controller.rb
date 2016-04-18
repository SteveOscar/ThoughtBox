class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save && password_match?
      session[:user_id] = @user.id
      redirect_to root_path
    else
      flash[:notice] = "invalid input"
      redirect_to new_user_path
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

    def password_match?
      params[:user][:password] == params[:user][:password_confirmation]
    end

end
