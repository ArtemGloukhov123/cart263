"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov

*********************************************************************/
//run setup when document is loaded
$(document).ready(setup);

function setup() {
  //alert the player that the game is best played in full screen
  //only do this once, as the player doesn't need a reminder every time they return to the desktop
  //Done this way instead of forcing fullscreen as forcing would be required on every single page
  let checkIfIntroDialogWasRead = localStorage.getItem("introDialogClosed");

  if(checkIfIntroDialogWasRead !== "true"){
    dialogBox("This interactive experience is best played through full screen mode.");
  }

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

//create a dialog box
function dialogBox(text) {

  //create a div to be turn into a dialog box
  let $dialog = $(`<div id='dialogdiv'></div>`).attr(`title`, `Alert`);

  //add text to the div
  $dialog.append(`<p>${text}</p>`);

  //Add the div to the page
  $('body').append($dialog);

  //turn the div into a dialog box
  $dialog.dialog({

    //add a button to take the user to the ending screen
    //code found at https://www.w3schools.com/howto/howto_js_fullscreen.asp
    buttons: {
      "Close": function() {
        $(this).dialog(`close`);
        localStorage.setItem("introDialogClosed", "true");
      }

    },

    //contain within body
    containment: 'body',
    width: 500
  });

  $dialog.parent().offset({
    top: 0.5 * ($(window).height() - $dialog.parent().height()),
    left: 0.5 * ($(window).width() - $dialog.parent().width())
  });
}
