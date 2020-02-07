"use strict";

/********************************************************************

Sweatshop Worker Simulator
Artem Gloukhov

You are an unfortunate soul assembling smartphones for Banana(TM), a phone company
who uses sweatshop workers for cheap labor.

*********************************************************************/
//individual module
let $module;
//div holding phone image
let $phone;
//image of box
let $box;
//div holding all modules
let $modules;

//pay variable
let pay = 0;

//sounds
let clickSound = new Audio("/assets/sounds/click.mp3");
let lightSound = new Audio("/assets/sounds/light.mp3");
let boxSound = new Audio("/assets/sounds/box.mp3");
let conveyorSound = new Audio("/assets/sounds/conveyor.mp3");
let clockSound = new Audio("/assets/sounds/clock.mp3");

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  //play an alert giving player instructions
  alert("Assemble the phone by placing the modules onto the motherboard, then place the phone into the box for shipment.")

  //run the noMoney function when "buy food" button is clicked
  $("#buyFood").on("click", noMoney);
  $modules = $("#modules");
  $module = $('.module');
  $phone = $('#phone');
  $box = $('#boxOpen');

  //add the modules to the "modules" div
  createModules();
  //animate the conveyor belt and "modules" div to move into position
  moveConveyorBelt();

  //make the modules and phone draggable, and the phone and box droppable
  $module.draggable();
  $phone.draggable();
  $phone.droppable({
    drop: function(event, ui) {
      //add the modules to the phone div to have them "stick"
      $phone.append(ui.draggable);
      //play ckicl sound when modules are dopped into the phone
      clickSound.play();
      //place the module in the right place on the phone
      ui.draggable.css({
        top: -170,
        left: 5
      })
    }
  });
  //perform the dropPhone function when phone is dropped onto box
  $box.droppable({
    drop: dropPhone
  });
}

//this function hides the static image of the conveyor belt
//and displays the gif of the moving conveyor belt
//then moves the modules div into position
function moveConveyorBelt() {
  $("#conveyorMoving").css("visibility", "visible");
  $("#modules").css("left", "-400px")
  $("#modules").animate({
    left: "350px"
  }, 4500, "linear");
  setTimeout(stopConveyorBelt, 4500);
  conveyorSound.play();
}

//this function hides the gif of the moving conveyor
//and displays the static image
function stopConveyorBelt() {
  $("#conveyorMoving").css("visibility", "hidden");
  conveyorSound.pause();
}

//this function hides the open box and displays the closed box
//then increases the pay by 0.01$
function dropPhone() {
  $("#boxClosed").css("visibility", "visible");
  $("#boxOpen").css("visibility", "hidden");
  $phone.css("visibility", "hidden");
  $module.css("visibility", "hidden");
  moveConveyorBelt();
  setTimeout(openBox, 1000);
  setTimeout(newPhone, 1000);

  boxSound.play();

  pay += 0.01;
  $("#yourPay2").html(pay);
}

//this function displays the open box again
//if the pay reaches 0.05$, the pay is brought back to 0
//due to an "error in shipment"
function openBox() {
  if (pay > 0.04) {
    pay = 0;
    $("#yourPay2").html(pay);
    alert("The shipment was lost in transit and you are not paid.");
  }
  $("#boxOpen").css("visibility", "visible");
  $("#boxClosed").css("visibility", "hidden");
  setTimeout(createModules, 1);
}

//remove modules from phone then animate the phone div to slide into view
function newPhone() {
  $phone.css("left", "-200px")
  $phone.css("top", "300px")
  $phone.css("visibility", "visible")
  $module.css("visibility", "visible");

  for (let i = 0; i < $module.length; i++) {
    $module[i].remove();
  }

  $phone.animate({
    left: "300px"
  }, 800, );

  //these sounds are placed here due to the browser not playing sounds until the user has interacted with it
  lightSound.loop = true;
  lightSound.play();

  clockSound.loop = true;
  clockSound.play();
}

//create four module elements that are added to the modules div
function createModules() {
  for (let i = 0; i < 4; i++) {
    let module = document.createElement("img");
    let moduleID = 'module' + i;
    module.setAttribute('id', moduleID);
    module.setAttribute('class', 'module');
    let imagenum = i + 1;
    module.setAttribute('src', 'assets/images/module' + imagenum + '.png');
    $modules.append(module);
    $module = $('.module');
    $module.draggable();
  }
}

//alert the player that they do not have enough money for food
function noMoney() {
  alert("You do not have enough money for food. Get back to work.")
}
