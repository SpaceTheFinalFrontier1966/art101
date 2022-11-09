/**
*Author: Dangc Aaron, Philip Orihuela
*Created: November 7, 2022
*License: Public Domain
*/

function sortingHat(name){
  if (typeof name === "string") {
    console.log("this is a string");
    length = name.length;
    mod = length % 4;
    console.log("Our value of mod", mod);
    if (mod == 0){
      return "Targaryen"
    } else if (mod == 1) {
      return "Stark"
    } else if (mod == 2) {
      return "Lannister"
    } else if (mod == 3) {
      return "Tyrell"
    } else if (mod == 4) {
      return "Martell"
    } else if (mod == 5) {
      return "Greyjoy"
    } else if (mod == 6) {
      return "Baratheon"
    } else if (mod == 7) {
      return "Arryn"
    } else if (mod == 8) {
      return "Bolton"
    } else if (mod == 9) {
      return "Dayne"
    } else if (mod == 10) {
      return "Frey"
    } else if (mod == 11) {
      return "Clegane"
    } else if (mod == 12) {
      return "Baelish"
    } else if (mod == 13) {
      return "Dondarrion"
    } else if (mod == 14) {
      return "Mormont"
    } else if (mod == 15) {
      return "Payne"
    } else if (mod == 16) {
      return "Reed"
    } else if (mod == 17) {
      return "Seaworth"
    } else if (mod == 18) {
      return "Tarly"
    } else if (mod == 19) {
      return "Tarth"
    } else if (mod == 20) {
      return "Tully"
    } else if (mod == 21) {
      return "Selmy"
    }
  } else {
    alert("Your House was eradicated during the War of the Five Kings");
  };
};

button = $("#button").click(function(){
  var name = $("#input").val();
  var house = sortingHat(name);
  var message = "Your ASOIAF House is" + " " + house;
  var messageHeader = $("<h2></h2>").addClass("welcome me").html(message);
  console.log(messageHeader);
  $("#output").append(messageHeader);
  $("#output").append("<br/>");
});
