$(document).ready(function(){
  disableModelDropdown();
  showModelDropDown();
  disableYearDropdown();
  disableSubmit();
  showYearDropDown();
  submitButton();
})

function disableModelDropdown(){
  $("#model-button").prop("disabled", true);
}
function disableYearDropdown(){
  $("#year-button").prop("disabled", true);
}
function disableSubmit(){
  $("#submit-button").prop("disabled", true);
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
      // var model_response = $(response).filter("#model-button").text()
       $('#model-button').prop('disabled', false);
       $("#model-button").replaceWith(response);
        $("#model-button").trigger("focus");

    })
  })
}

function showYearDropDown(){
  $("#search-form").on("change","#model-button", function(event){
    var data = $(this).parent().serialize()
    // console.log(data)
    $.ajax({
      method: "POST",
      url: "/years",
      data: data
    })
    .done(function(response){
      // console.log(response)
      // var year_response = $(response).filter("#year-button").text();
      // console.log(year_response);
      $("#year-button").prop('disabled', false);
      $("#year-button").replaceWith(response);
      $("#submit-button").prop('disabled', false);
      $("#year-button").trigger("focus")
      // for (var i = 0; i < parsed_response.length; i++){
      //   $("#year-button").append( '<option value=' + parsed_response[i] + '>' + parsed_response[i]+'</option>')
      // }
    })
  })
}

function submitButton(){
  $(".container").on("submit", "#search-form", function(event){
    event.preventDefault();
    var vehicle_data = $(this).serialize();
    //var model = $(this).attr('model')
    // console.log($(this))
    console.log(vehicle_data)
    $.ajax({
      method: "GET",
      url: "/welcome/get_reviews",
      data: vehicle_data
    })
    .done(function(response){
      // $(".float-left").children(".reviews").append(response);
      $(".reviews").append(response)
      $("#submit-button").trigger("focus");

    })

  })
}


