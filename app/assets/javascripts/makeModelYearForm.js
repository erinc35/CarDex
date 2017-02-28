$(document).ready(function(){
  disableModelDropdown();
  showModelDropDown();
  disableYearDropdown();
  disableSubmit();
  showYearDropDown();
  submitButtonReviews();
  focusSubmitButton();
  submitButtonSafety();
  submitButtonRatings();
  submitButtonEachCarRating();

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
      $("#year-button").prop('disabled', false);
      $("#year-button").replaceWith(response);
      $("#submit-button").prop('disabled', false);
      $("#year-button").trigger("focus")
    })
  })
}

function submitButtonReviews(){
  $(".container").on("submit", "#search-form", function(event){
    event.preventDefault();
    $(".reviews").html("");
    var vehicle_data = $(this).serialize();
    $.ajax({
      method: "GET",
      url: "/welcome/get_reviews",
      data: vehicle_data
    })
    .done(function(response){
      $("#tab-1").css("display", "block");
      $(".tabs").append(response);
      // $("#tab-2").children("#tab-2").css("display", "block !important")

    })

  })
}
function submitButtonRatings(){
  $(".container").on("submit", "#search-form", function(event){
    event.preventDefault();

    var vehicle_data = $(this).serialize();
    // console.log(vehicle_data)
    $.ajax({
      method: "GET",
      url: "/welcome/averageRating",
      data: vehicle_data
    })
    .done(function(response){
      // $(".zzz").append(response);
      // var averageRating = parseFloat($(".zzz").text()) * 20
      // var percentageRating = averageRating.toString() + "%";
      // $(".ratings").css("display", "block");
      // $(".stars").css("width", percentageRating);


    })

  })
}
function submitButtonSafety(){
  $(".container").on("submit", "#search-form", function(){

    var vehicle_data = $(this).serialize();
    $.ajax({
      method: "GET",
      url: "/welcome/safety",
      data: vehicle_data
    })
    .done(function(response){
      $(".tabs").append(response)

    })

  })
}

function submitButtonEachCarRating(){
  $(".container").on("submit", "#search-form", function(){

    var vehicle_data = $(this).serialize();
    $.ajax({
      method: "GET",
      url: "/welcome/get_reviews",
      data: vehicle_data
    })
    .done(function(response){
      $(".tabs").append(response)
    var averageRating = parseFloat($(".rating").text())

    })

  })
}




function focusSubmitButton(){
  $("#year-button").change(function(){
  $("#submit-button").trigger("focus");

  })
}

function loginFormPress()  {
  $(".login-link").on("click", function(event){
   event.preventDefault();
   $(".login-form").slideDown();
   mouseLeaveBlack();
   mouseEnterWhite();

 })

}

