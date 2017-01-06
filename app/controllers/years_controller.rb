class YearsController < ApplicationController
  def show
  end

  def create
     p params["make"]
    p params["model"]

    @api_response_year = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/#{params["make"]}/#{params["model"]}/years?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
    if request.xhr?
      parsed_response = JSON.parse(@api_response_year.body)
      @years_array = parsed_response["years"].map {|array| array["year"]}
      render partial: 'partials/years', locals: {years_array: @years_array}
    end

  end
end
