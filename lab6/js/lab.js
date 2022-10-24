/*
 * Author: Philip Orihuela <porihuel@ucsc.edu>
 * Created: 19 October
 * License: Public Domain
 */

 // Define Variables
myTransport = ["Ford Taurus", "bike", "rides from friends", "a scooter"];

myMainRide = {
  make: "Ford",
  model : "Taurus",
  color : "Red",
  year : 1995,
  age : function() {
      return 2022 - age;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
