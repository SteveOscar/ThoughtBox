require 'test_helper'

class VisitHomepageTest < ActionDispatch::IntegrationTest
  test "a guest is redirect to login page" do
    visit root_path

    assert_equal welcome_path, current_path
    assert page.has_content?('Sign Up')
  end
end
