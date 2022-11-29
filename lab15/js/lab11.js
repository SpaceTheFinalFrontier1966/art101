/**
*Author: DWei-Yan Chiang, Philip Orihuela
*Created: November 14, 2022
*License: Public Domain
*/

fucntion fizzBuzzBoom(maxNums,factorObj) {
  for (var num=0; num<maxNums; num++) {
    var outputStr = "";
    for (var factor in factorObj) {
      if (num % factor == 0) {
        outputStr += factorObj[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max) {
    reportError("You pust provide a maximum");
  }
})

({button = $("#button").click(function(){
  "answer": "yes",
  "forced": false,
  "image": "https://yesno.wtf/assets/yes/2.gif"
}));

function sortingThing(name){
  if (typeof name === "string") {
    console.log("this is a string");
    length = name.length;
    mod = length % 4;
    console.log("Our value of mod", mod);
    if (mod == 0){
      return "Yes"
    } else if (mod == 1) {
      return "No"
    } else if (mod == 2) {
      return "Maybe"
  };
};
