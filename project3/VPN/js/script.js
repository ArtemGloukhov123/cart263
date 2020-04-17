"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $('#button').on('click', getVPN);
}

function getVPN(){
  $('#button').html("");
  $('#button').css('width', '60px');
  $('#button').css('border-radius', '30px');
  setTimeout(function() {
    $('#button').html("✓");
  }, 700);

  localStorage.setItem('hasVPN', true);
}
