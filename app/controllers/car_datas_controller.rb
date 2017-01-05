class CarDatasController < ApplicationController

  def create
    @api_response = HTTParty.get("https://api.edmunds.com/api/vehicle/v2/#{params["make"]}/models?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    if request.xhr?
      parsed_response = JSON.parse(@api_response.body)
      # p parsed_response["models"].map {|array| array["name"]}
      @models_array = parsed_response["models"].map {|array| array["name"]}
      render partial: 'partials/models', locals: {models_array: @models_array}
    end

  end

  def years
    @api_response = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/#{params["make"]}/#{params["model"]}/years?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    p @api_response
    if request.xhr?
      @api_response["years"].map {|array| array["year"]}.to_json
    end
  end

  def show

  end

  def models

  end
end
