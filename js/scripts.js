$(document).ready(function() {
  $("#appointment").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    $("#output1").text(name)

    const food = $("#favfood").val();
    $("#output2").text(food)

    const music = $("input:radio[name=music]:checked").val();
    $("#output3").text(music)

    const dob = $("input#born").val();
    $("#output4").text(dob)

    const color = "This is the hex code: " + $("input#color").val() ;
    $("#output5").text(color)
  });
});