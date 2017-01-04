$(document).ready(function(){
  disableModelDropdown();
  disableYearDropdown();
})

function disableModelDropdown(){
  $("#model-button").prop("disabled", true);
}
function disableYearDropdown(){
  $("#year-button").prop("disabled", true);
}
