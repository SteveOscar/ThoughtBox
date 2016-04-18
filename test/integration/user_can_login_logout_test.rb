require 'test_helper'

class UserLogsInAndOutTest < ActionDispatch::IntegrationTest
  test "a user can log in and out" do
    visit root_path
    click_on('Log In')
    fill_in "Email", with: "carl@example.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"

    click_on "Log In"
    assert_equal root_path, current_path
    click_on "Log Out"
    assert_equal welcome_path, current_path
  end
end
