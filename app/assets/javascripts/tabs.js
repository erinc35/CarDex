$(document).ready(function(){
  tabContent();
})

function tabContent() {
  $('.tabs li').click(function(event){

    event.preventDefault();

    $(".tabs").children(".current").removeClass('current');
    $(this).addClass('current');
    var buu = $(this).children("a").attr("href");
    $(".tab-content").css("display", "none");
    $(buu).css("display", "block");



     });
  }


     // $('ul.tabs li').removeClass('current');
     //    $(this).addClass('current');
     //    $('.tab-content').hide();
     //    $($(this).attr('tab-content')).show();
