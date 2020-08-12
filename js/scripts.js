$(document).ready(function() {
  $("#appointment").submit(function(event) {
    event.preventDefault();
  /*  $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".startTime").text(startInput);
    $(".endTime").text(endInput); */
  
    $("#appointmentShown").show();

  });
});