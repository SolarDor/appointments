$(document).ready(function() {
  $("#appointment").submit(function() {
    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".startTime").text(startInput);
    $(".endTime").text(endInput);

  });
});