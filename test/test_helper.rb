require "simplecov"
SimpleCov.start "rails"

ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require "capybara/rails"
require 'minitest/pride'
# require 'webmock'
# require 'vcr'
# require "minitest-vcr"
# require 'mocha/mini_test'


class ActiveSupport::TestCase

  include Capybara::DSL
  fixtures :all
end

module ActionDispatch
  class IntegrationTest
    include Capybara::DSL
    def setup
      Rails.cache.clear
    end

    def teardown
      reset_session!
    end
  end
end
