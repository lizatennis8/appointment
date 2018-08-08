$(document).ready(function() {

  $("#formOne").submit(function() {
    var nameInput = $("input#name").val();
    var appointmentInput = $("input#appointment").val();
    var dateInput = $("input#date").val();
    var starttimeInput = $("input#starttime").val();
    var endtimeInput = $("input#endtime").val();

    $(".name").text(nameInput);
    $(".appointment").text(appointmentInput);
    $(".date").text(dateInput);
    $(".starttime").text(starttimeInput);
    $(".endtime").text(endtimeInput);

    $("#details").show();

    event.preventDefault();

  });
});
