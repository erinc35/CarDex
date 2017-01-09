require 'test_helper'

class SafetyControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get safety_show_url
    assert_response :success
  end

end
