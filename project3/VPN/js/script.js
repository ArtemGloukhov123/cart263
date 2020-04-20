"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $('#button').on('click', getVPN);

  //check if VPN is already active
  let vpnVal = localStorage.getItem("hasVPN");

  //change the button so user knows VPN is active
  if (vpnVal === "true") {
    $('#button').html("You are already protected");
    $('#button').css("background", "grey");
    $('#button').off();
  }
}

function getVPN() {
  //remove button function so animation doesn't play again when button is pressed more than once
  $('#button').off();

  //animate the button for user feedback
  $('#button').html("");
  $('#button').css('width', '60px');
  $('#button').css('border-radius', '30px');
  setTimeout(function() {
    $('#button').html("✓");
  }, 700);

  //once the button has been clicked, all pages can check that VPN is active
  //VPN will stay active until the internet browser is closed (X clicked)
  localStorage.setItem('hasVPN', true);
  setTimeout(youAreNowProtected, 2500);
}

//secondary animation of button, telling user that VPN is active
function youAreNowProtected() {
  $('#button').html("");
  $('#button').css('width', '350px');
  $('#button').css('border-radius', '15px');
  setTimeout(function() {
    $('#button').html("You are now protected");
  }, 700);
}
