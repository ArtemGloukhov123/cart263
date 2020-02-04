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
let $modules;

$(document).ready(setup);

function setup() {
  $modules = $("#modules");

  createModules();
  moveConveyorBelt();

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
}

function moveConveyorBelt() {
  $("#conveyorMoving").css("visibility", "visible");
  $("#modules").css("left", "-400px")
  $("#modules").animate({
    left: "350px"
  }, 4500, "linear");
  setTimeout(stopConveyorBelt, 4500);


}

function stopConveyorBelt() {
  $("#conveyorMoving").css("visibility", "hidden");
}

function dropPhone() {
  $("#boxClosed").css("visibility", "visible");
  $("#boxOpen").css("visibility", "hidden");
  $phone.css("visibility", "hidden");
  $module.css("visibility", "hidden");
  moveConveyorBelt();
  setTimeout(openBox, 1000);
  setTimeout(newPhone, 1000);

}

function openBox() {
  $("#boxOpen").css("visibility", "visible");
  $("#boxClosed").css("visibility", "hidden");
  setTimeout(createModules, 1);
}

function newPhone() {
    $phone.css("left", "-200px")
    $phone.css("top", "300px")
    $phone.css("visibility", "visible")
    $module.css("visibility", "visible");

    for(let i=0; i<$module.length; i++){
      $module[i].remove();
    }

    $phone.animate({
      left: "300px"
    }, 800,);
}

function createModules() {
  for(let i = 0; i<4; i++) {
    let module = document.createElement("img");
    let moduleID = 'module' + i;
    module.setAttribute('id', moduleID);
    module.setAttribute('class','module');
    let imagenum = i + 1;
    module.setAttribute('src','assets/images/module' + imagenum + '.png');
    $modules.append(module);
    $module = $('.module');
    $module.draggable();
  }
}
