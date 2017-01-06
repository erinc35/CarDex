class YearsController < ApplicationController
  def show
  end

  def create
     p params["make"]

    @api_response_year = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/#{params["make"]}/#{params["model"]}/years?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    p @api_response_year
    p params["model"]
    # if request.xhr?
    #   @api_response_year["years"].map {|array| array["year"]}.to_json
    # end

  end
end
