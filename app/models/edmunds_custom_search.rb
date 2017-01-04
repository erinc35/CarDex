# class EdmundsCustomSearch
#   include HTTParty

#   @@mykey = ENV['EDMUNDSAPIKEY']

#   def self.make_request()
#     response = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=#{@@mykey}")
#   end

#   def self.model_request()
#     HTTParty.get("https://api.edmunds.com/api/vehicle/v2/#{params["make"]}/models?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")

#     #response = HTTParty.get("https://api.edmunds.com/api/vehicle/v2/#{params["make"]}/models?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
#   end

#   def self.year_request()
#     response = HTTParty.get("http://api.edmunds.com/api/vehicle/v2/#{params["make"]}/#{params["model"]}/years?fmt=json&api_key=#{ENV['EDMUNDSAPIKEY']}")
#   end


# end
