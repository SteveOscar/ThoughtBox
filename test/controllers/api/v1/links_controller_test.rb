require 'test_helper'

class Api::V1::LinksControllerTest < ActionController::TestCase
  # def setup
  #   request.env['HTTP_AUTHORIZATION'] = "Token token=#{ENV["RAMBLE_MAP_ID"]}"
  # end

  test "#index" do
    get :index, user_id: User.first.id, format: :json

    links = JSON.parse(response.body)
    sample_country = links.first

    assert_response :success
    assert_equal 1, links.count
  end

  test "#create" do
    id = User.first.id
    initial_count = Link.count
    get :create, link: { title: 'test link', url: 'www.cnn.com', user_id: id }, format: :json

    data = JSON.parse(response.body)
    final_count = Link.count
    assert_response :success
    assert final_count >  initial_count
  end

  test "#destroy" do
    id = Link.first.id
    initial_count = Link.count
    delete :destroy, id: id, format: :json

    final_count = Link.count
    assert_response :success
    assert final_count <  initial_count
  end
end
