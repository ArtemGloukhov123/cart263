"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $("#interneticon").on("click", function(){
    window.location.href = "../Homepage/Homepage.html";
  });
}
