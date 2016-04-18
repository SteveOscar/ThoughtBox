require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  def setup
    @link = links(:one)
  end

  test "link should be valid" do
    assert @link.valid?
  end

  test "email should be present" do
    @link.url = ""
    refute @link.valid?
  end
end
