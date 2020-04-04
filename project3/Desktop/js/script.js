"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $("#internetdiv").on("click", function() {
    window.location.href = "../Homepage/Homepage.html";
  });
  $("#imagediv").on("click", openPicture);

  //have the cursor change to a pointer when mousing over the icons
  document.getElementById("internetdiv").style.cursor = "pointer";
  document.getElementById("imagediv").style.cursor = "pointer";
  //same with the start button
  document.getElementById("start").style.cursor = "pointer";
}

function openPicture() {
  // Dynamically create a div and store it in a variable. This is the div
  // we will turn into a dialog box. Set its title at the same time.
  let $dialog = $(`<div></div>`).attr(`title`, `family.png`);

  //add an image to the body of the dialog box
  $dialog.append(`<img src="assets/images/family.png">`);
  // Finally, add the div to the page
  $('body').append($dialog);

  // Now we have our div on the page, transform it into a dialog with jQuery UI's
  // .dialog() method, supplying a number of options to configure it
  $dialog.dialog({
    // The 'buttons' option lets us specify buttons to appear in the dialog as
    // the properties of an object. The property name is used as the button text
    // and the property contains a function that will be called when that button
    // is clicked. Note how you can have quote marks around a property name (important
    // if you want to include spaces for instance.)
    // In this case both buttons just close the dialog
    buttons: {
      "Close": function() {
        $(this).dialog(`close`);
      }
    },
    // The 'containment' option lets us specify where the dialog can go on the screen. 'body' means it will be
    // contained within the body tag, and can't be dragged out of it.
    containment: 'body',
    width: 600
  });

  // Finally, use .offset() on the .parent() of the dialog in order to give it a random position on the screen.
  // Uses .height() and .width() to get the dimensions of elements, including the window.
  $dialog.parent().offset({
    top: Math.random() * ($(window).height() - $dialog.parent().height()),
    left: Math.random() * ($(window).width() - $dialog.parent().width())
  });
}
