require 'awesome_print'
require_relative '../models/edmunds_custom_search'
require 'httparty'

class WelcomeController < ApplicationController
  include HTTParty
  def index
    make_data = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    @makes_array = make_data["makes"].map {|array| array["name"]}

  end
end
