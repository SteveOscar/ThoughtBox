require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # should validate_uniqueness_of(:email)
  # should validate_presence_of(:email)

  def setup
    @user = users(:one)
  end

  test "user should be valid" do
    assert @user.valid?
  end

  test "email should be present" do
    @user.email = ""
    refute @user.valid?
  end
end
