/**
*Author: Wei-Yan Chiang, Philip Orihuela
*Created: November 14, 2022
*License: Public Domain
*/

//did you and jocelyn do this together? I believe I did this myself with minor assitance from her. I see.
//can you put your github username so I can see how this page currently runs? "SpaceTheFinalFrontier1966" I forget why I did it Star Trek themed.
fucntion fizzBuzzBoom(maxNums,factorObj) {
  for (var num=0; num<maxNums; num++) {
    var outputStr = "";
    for (var factor in factorObj) {
      if (num % factor == 0) {
        outputStr += factorObj[factor];
      }
    }
    if (outputStr != 0) {
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
