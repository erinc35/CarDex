class CarDatasController < ApplicationController

  def create
    # p params["make"]
    @api_response = HTTParty.get("https://api.edmunds.com/api/vehicle/v2/#{params["make"]}/models?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    if request.xhr?
      parsed_response = JSON.parse(@api_response.body)
      # p parsed_response["models"].map {|array| array["name"]}
      @models_array = parsed_response["models"].map {|array| array["name"]}
      render partial: 'partials/models', locals: {models_array: @models_array}
    end

    # @api_response_year = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/#{params["make"]}/#{params["model"]}/years?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    # p @api_response_year
       #p params["model"]
    # if request.xhr?
    #   @api_response_year["years"].map {|array| array["year"]}.to_json
    # end
  end

  def years


  end

  def show

  end

  def models

  end
end
