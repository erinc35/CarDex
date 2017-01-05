$(document).ready(function(){
  disableModelDropdown();
  disableYearDropdown();
  showModelDropDown();
})

function disableModelDropdown(){
  $("#model-button").prop("disabled", true);
}
function disableYearDropdown(){
  $("#year-button").prop("disabled", true);
}

var showModelDropDown = function(){
  $("#make-button").on("change", function(event){
      var data = $(this).serialize()

      console.log(data)
    $.ajax({
      method: "POST",
      url: '/car_datas',
      data: data
    })
    .done(function(response){
      // console.log(response)
      // var parsed_response = JSON.parse(response);
      // console.log(parsed_response)
      var model_response = $(response).filter("#model-button").text()
       $('#model-button').prop('disabled', false);
       $("#model-button").replaceWith(response);
        $("#model-button").trigger("focus");
       // $("#model-button").expandSelect();
       // $("#model-button").attr('size',16);

      // for (var i = 0; i < model_response.length; i++){
      //   $("#model-button").append( '<option value=' + model_response[i] + '>' + model_response[i]+'</option>')
      // }
    })
  })
}
