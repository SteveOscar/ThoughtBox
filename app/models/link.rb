require 'uri'

class Link < ActiveRecord::Base
  # validates :click_through_url, url: true
  belongs_to :user
end
