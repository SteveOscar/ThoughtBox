require 'test_helper'
require "selenium-webdriver"

class UsersCanViewTheirLinksTest < ActionDispatch::IntegrationTest
  def setup
    visit login_path
    fill_in "Email", with: "carl@example.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"

    click_on "Log In"
  end
  test "logged in users can see their links" do
    skip

    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    element = driver.find_element(:class, 'link-title')
    #
    # element.send_keys "Snow Day"
    # element2.send_keys "Snow Day Body"
    # driver.find_element(:id, 'create-idea').click
    #
    # assert driver.find_element(:id=>"all-ideas").text.include? "Snow Day"




    # assert page.has_content?('Motorcycles')
    # assert page.has_content?('www.example.com/link1')
  end

end
