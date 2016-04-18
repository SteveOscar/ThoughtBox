require 'test_helper'

class NewUserSignsUpTest < ActionDispatch::IntegrationTest
  test "a new user can sign up" do
    visit root_path
    assert_equal welcome_path, current_path
    click_on('Sign Up')
    assert_equal new_user_path, current_path
    fill_in "Email", with: "steve@example.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"

    click_on "Sign Up"
    user = User.last

    assert_equal user.email, "steve@example.com"
    assert_equal root_path, current_path
  end

  test "a new user cannot sign up with duplicate email" do
    initial_count = User.count
    visit root_path
    assert_equal welcome_path, current_path
    click_on('Sign Up')
    assert_equal new_user_path, current_path
    fill_in "Email", with: "carl@example.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"

    click_on "Sign Up"
    final_count = User.count
    assert_equal initial_count, final_count
    assert_equal new_user_path, current_path
  end
end
