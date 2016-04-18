require 'uri'

class Link < ActiveRecord::Base
  # validates :click_through_url, url: true
  validates_presence_of :url
  belongs_to :user
end
