"use strict";

/********************************************************************
Task bar

This document is for linking in html files that need a task bar at the bottom
of the page, more elegant than rewriting the code each time.
*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  //display start button at bottom left of screen
  let startButton = document.createElement('img');
  startButton.setAttribute('src', '../Taskbar/assets/images/startbutton.png');
  startButton.setAttribute('id', 'start');

  //append to body
  document.body.appendChild(startButton);

  $('#start').css('position', 'absolute');
  $('#start').css('width', '120px');
  $('#start').css('left', '-10px');
  $('#start').css('bottom', '0px');
  $('#start').css('z-index', '2');

  document.getElementById("start").style.cursor = "pointer";

  //display task bar at bottom of screen
  let taskBar = document.createElement('div');
  taskBar.setAttribute('id', 'taskbar');

  document.body.appendChild(taskBar);

  $('#taskbar').css('position', 'absolute');
  $('#taskbar').css('bottom', '0px');
  $('#taskbar').css('left', '0px');
  $('#taskbar').css('width', '100%');
  $('#taskbar').css('height', '36px');
  $('#taskbar').css('background', 'rgb(72, 144, 226)');
  $('#taskbar').css('background', 'linear-gradient(180deg, rgba(72, 144, 226, 1) 9%, rgba(38, 97, 221, 1) 24%)');
  $('#taskbar').css('z-index', '1');

  //create hidden picture of start menu
  let startMenu = document.createElement('img');
  startMenu.setAttribute('src', '../Taskbar/assets/images/startmenu.png');
  startMenu.setAttribute('id', 'startmenu');

  document.body.appendChild(startMenu);

  $('#startmenu').css('position', 'absolute');
  $('#startmenu').css('left', '0px');
  $('#startmenu').css('bottom', '35px');
  $('#startmenu').css('visibility', 'hidden');
  $('#startmenu').css('z-index', '3');


  //open start menu when start button is clicked
  $("#start").on("click", function() {
    //if the menu is hidden, show it when start is clicked. If showing, hide it.
    if ($("#startmenu").css("visibility") === "hidden") {
      $("#startmenu").css("visibility", "visible");
    } else {
      $("#startmenu").css("visibility", "hidden");
    }
  });

  //have start button highlighted when hovered over
  if ($("#startmenu").css("visibility") === "hidden") {
    $('#start').hover(function() {
      $('#start').css('filter', 'brightness(1.2)');
    });
    //have the brightness return to normal when mouse leaves the button
    $('#start').mouseleave(function() {
      $('#start').css('filter', 'brightness(1)');
    });
  }

}
