"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $("#internetdiv").on("click", function(){
    window.location.href = "../Homepage/Homepage.html";
  });

//have the cursor change to a pointer when mousing over the icons
  document.getElementById("internetdiv").style.cursor = "pointer";
  document.getElementById("imagediv").style.cursor = "pointer";
//same with the start button
  document.getElementById("start").style.cursor = "pointer";
}
