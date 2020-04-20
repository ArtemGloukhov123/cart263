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
  // Dynamically create a div and store it in a variable. This is the div
  // we will turn into a dialog box. Set its title at the same time.
  let $dialog = $(`<div id='dialogdiv'></div>`).attr(`title`, `family.png`);

  //add an image to the body of the dialog box
  $dialog.append(`<img src="assets/images/family.png" id='familyimage'>`);
  // Finally, add the div to the page
  $('body').append($dialog);

  // Now we have our div on the page, transform it into a dialog with jQuery UI's
  // .dialog() method, supplying a number of options to configure it
  $dialog.dialog({

    // The 'containment' option lets us specify where the dialog can go on the screen. 'body' means it will be
    // contained within the body tag, and can't be dragged out of it.
    containment: 'body',
    width: 600
  });

  // Finally, use .offset() on the .parent() of the dialog in order to give it a random position on the screen.
  // Uses .height() and .width() to get the dimensions of elements, including the window.
  $dialog.parent().offset({
    top: 0.5 * ($(window).height() - $dialog.parent().height()),
    left: 0.5 * ($(window).width() - $dialog.parent().width())
  });
}
