"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let $leader;

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $("#close").on("click", function(){
    window.location.href = "../Desktop/Desktop.html";
  });
  document.getElementById("close").style.cursor = "pointer";
$leader = $("#leader");

$leader.draggable();
}
