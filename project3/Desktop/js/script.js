"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov

*********************************************************************/
//run setup when document is loaded
$(document).ready(setup);

function setup() {

  //go to internet page when internet icon is clicked
  $("#internetdiv").on("click", function() {
    window.location.href = "../HomePage/HomePage.html";
  });

  //open image when image icon is clicked
  $("#imagediv").on("click", openPicture);

  //have the cursor change to a pointer when mousing over the icons
  document.getElementById("internetdiv").style.cursor = "pointer";
  document.getElementById("imagediv").style.cursor = "pointer";
}

function openPicture() {
  //code taken from Pippin Barr's "Endless Dialogs" game
  
  //open a dialog box with the family picture inside of it
  //start with a div
  let $dialog = $(`<div id='dialogdiv'></div>`).attr(`title`, `family.png`);

  //add an image to the body of the dialog box
  $dialog.append(`<img src="assets/images/family.png" id='familyimage'>`);

  //Add the div to the page
  $('body').append($dialog);

  //Turn the div into a dialog box
  $dialog.dialog({

    //contained within the body of the document
    containment: 'body',
    width: 600
  });

  $dialog.parent().offset({
    top: 0.5 * ($(window).height() - $dialog.parent().height()),
    left: 0.5 * ($(window).width() - $dialog.parent().width())
  });
}
