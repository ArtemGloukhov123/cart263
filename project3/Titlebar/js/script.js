"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
//display the title bar at the top of the screen
let titleBar = document.createElement('img');
titleBar.setAttribute('src', '../Titlebar/assets/images/titlebar.png');
titleBar.setAttribute('id', 'titlebar');

document.body.appendChild(titleBar);

$('#titlebar').css('position', 'fixed');
$('#titlebar').css('top', '0px');
$('#titlebar').css('left', '0px');

//display the minimize/close buttons at the top right of the screen
let close = document.createElement('img');
close.setAttribute('src', '../Titlebar/assets/images/closewindow.png')
close.setAttribute('id', 'close');

document.body.appendChild(close);

$('#close').css('position', 'fixed');
$('#close').css('top', '4px');
$('#close').css('right', '4px');

//return to desktop when window is closed
$("#close").on("click", function(){
  window.location.href = "../Desktop/Desktop.html";
  localStorage.removeItem('hasVPN');
});
//display pointer cursor when hovering over close button
document.getElementById("close").style.cursor = "pointer";
}
