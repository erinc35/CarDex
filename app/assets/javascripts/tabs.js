$(document).ready(function(){
  tabContent();
})

function tabContent() {
  $('.tabs li').click(function(event){
    event.preventDefault();

    // var tab_id = $(this).attr('data-tab');
    // $("#tab-1").css("display", "block")

    $(".tabs").children(".current").removeClass('current');
    $(this).addClass('current');
    // console.log($(this))
    var buu = $(this).children("li")
    console.log(buu)
    // $(".tab-content").css("display", "none");
    // $(buu).css("display", "block");

    // $('.tab-content').removeClass('current');
    // $("#"+tab_id).addClass('current');
    // $(".tab-content").css("display", "block");
     });
  }


     // $('ul.tabs li').removeClass('current');
     //    $(this).addClass('current');
     //    $('.tab-content').hide();
     //    $($(this).attr('tab-content')).show();
