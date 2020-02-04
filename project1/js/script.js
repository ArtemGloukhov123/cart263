"use strict";

/********************************************************************

Sweatshop Worker Simulator
Artem Gloukhov

You are an unfortunate soul assembling smartphomes for Banana(TM), a phone company
who uses sweatshop workers for cheap labor.

*********************************************************************/
let $module;
let $phone;
let $box;


$(document).ready(setup);

function setup() {
  $module = $('.module');
  $phone = $('#phone');
  $box = $('#boxOpen');

  $module.draggable();
  $phone.draggable();
  $phone.droppable({
    drop: function(event,ui) {
      $phone.append(ui.draggable);
      ui.draggable.css({
        top: -170,
        left: 5
      })
    }
  });
  $box.droppable({
    drop: dropPhone
  });
  moveConveyorBelt();
}

function moveConveyorBelt() {
  $("#conveyorMoving").css("visibility", "visible");
  $("#modules").css("left", "-200px")
  $("#modules").animate({
    left: "450px"
  }, 4500, "linear");
  setTimeout(stopConveyorBelt, 4500);

  $(".modules").append($("#module1"));
  $(".modules").append($("#module2"));
  $(".modules").append($("#module3"));
  $(".modules").append($("#module4"));
}

function stopConveyorBelt() {
  $("#conveyorMoving").css("visibility", "hidden");
}

function dropPhone() {
  $("#boxClosed").css("visibility", "visible");
  $("#boxOpen").css("visibility", "hidden");
  $phone.css("visibility", "hidden");
  moveConveyorBelt();
  setTimeout(openBox, 1000);
  setTimeout(newPhone, 1000);
}

function openBox() {
  $("#boxOpen").css("visibility", "visible");
  $("#boxClosed").css("visibility", "hidden");
}

function newPhone() {
    $phone.css("left", "-200px")
    $phone.css("top", "300px")
    $phone.css("visibility", "visible")
    $phone.animate({
      left: "300px"
    }, 800,);
}
