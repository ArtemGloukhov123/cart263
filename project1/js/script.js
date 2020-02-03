"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
let $fly;
let $mouth;


$(document).ready(setup);

function setup() {
  $fly = $('#fly');
  $mouth = $('#mouth');

  $fly.draggable();
  $mouth.droppable({
    drop: onDrop
  });
}

function onDrop(event, ui) {
  ui.draggable.remove();
  $(this).attr('src', 'assets/images/mouth-closed.png');
  setInterval(chew, 500);
  console.log("dropped");
}

function chew() {
  console.log($mouth.attr("src"));
  if($mouth.attr("src") === "assets/images/mouth-open.png") {
    $mouth.attr("src", "assets/images/mouth-closed.png");
  } else {
    $mouth.attr("src", "assets/images/mouth-open.png");
  }
}
