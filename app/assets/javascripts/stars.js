$(document).ready(function(){
  displayStars();
})


function displayStars(){
  $(".container").on("submit", "#search-form", function(event){
    event.preventDefault();

    var vehicle_data = $(this).serialize();
    // console.log(vehicle_data)
    $.ajax({
      method: "GET",
      url: "/welcome/get_reviews",
      data: vehicle_data
    })
    .done(function(response){
      // var averageRating = parseFloat($(".zzz").text()) * 20
      // var percentageRating = averageRating.toString() + "%";
      // $(".ratings").css("display", "block");
      // $(".stars").css("width", percentageRating);


    })

  })
}
