$(document).ready(function(){
  tabContent();
})

function tabContent() {
  $('ul.tabs li').click(function(event){
    event.preventDefault();

    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $(this).addClass('current');
    $('.tab-content').removeClass('current');

    $("#"+tab_id).addClass('current');
    $(".tab-content").css("display", "block");
    });
  }


     // $('ul.tabs li').removeClass('current');
     //    $(this).addClass('current');
     //    $('.tab-content').hide();
     //    $($(this).attr('tab-content')).show();
