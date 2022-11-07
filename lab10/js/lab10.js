/**
*Author: Daphne Cheng, Philip Orihuela
*Created: November 2, 2022
*License: Public Domain
*/

function nameSorter(){
  var userName = inputName;

  var nameArray = userName.split('');

  var sortedArray = nameArray.sort();

  var sortedName = sortedArray.join('');

  return(sortedName);
}

var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output");

buttonEl.addEventListener('click', function(){
  var inputVal = document.getElementById('user-name').value;
  var sortedNewName = nameSorter(inputVal);
  outputEl.innerHTML = sortedNewName;
  document.getElementById("user-name").value="Bunsen burner";
})
