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

function showModelDropDown(){
  $("#make-button").on("change", function(event){
      var data = $(this).serialize()

      console.log(data)
    $.ajax({
      method: "POST",
      url: '/car_datas',
      data: data
    })
    .done(function(response){
      var model_response = $(response).filter("#model-button").text()
       $('#model-button').prop('disabled', false);
       $("#model-button").replaceWith(response);
        $("#model-button").trigger("focus");

    })
  })
}

function disableYearDropdown(){
  $("#year-button").prop('disabled', true);
}

var showYearDropDown = function(){
  $("#model-button").on("change", function(event){
    var data = $(this).parent().serialize()
    //console.log(data)
    $.ajax({
      method: "POST",
      url: "/year",
      data: data
    })
    .done(function(response){
      var parsed_response = JSON.parse(response);
      //console.log(response);
      $("#year-button").prop('disabled', false);
      for (var i = 0; i < parsed_response.length; i++){
        $("#year-button").append( '<option value=' + parsed_response[i] + '>' + parsed_response[i]+'</option>')
      }
    })
  })
}
