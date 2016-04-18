require 'test_helper'

class UsersCanViewTheirLinksTest < ActionDispatch::IntegrationTest
  test "logged in users can see their links" do
    visit login_path
    fill_in "Email", with: "carl@example.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"

    click_on "Log In"

    assert_equal root_path, current_path
    assert page.has_content?('Motorcycles')
    assert page.has_content?('www.example.com/link1')
  end
end
