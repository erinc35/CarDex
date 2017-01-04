require 'test_helper'

class CarDatasControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get car_datas_show_url
    assert_response :success
  end

end
