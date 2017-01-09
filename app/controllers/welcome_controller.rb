require 'awesome_print'
require_relative '../models/edmunds_custom_search'
require 'httparty'

class WelcomeController < ApplicationController
  include HTTParty
  def index
    make_data = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    @makes_array = make_data["makes"].map {|array| array["name"]}

  end

  def get_reviews
    reviews_data = HTTParty.get("https://api.edmunds.com/api/vehiclereviews/v2/#{params["make"].downcase}/#{params["model"].downcase}/#{params["year"].downcase}?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")

    if request.xhr?
      parsed_response = JSON.parse(reviews_data.body)
      @reviews = parsed_response["reviews"].map {|array| array["text"]}
      render partial: 'partials/reviews', locals: {reviews: @reviews}
    end
  end

  def safety
    safety_data = HTTParty.get("https://api.edmunds.com/api/vehicle/v2/#{params["make"]}/#{"params[model]"}/#{params["year"]}/safety?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")

  end
end
