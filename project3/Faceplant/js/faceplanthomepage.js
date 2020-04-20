"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let textFieldChars;

let password = "GloryToOurLeader45";

let num = 0;
let sendNum = 0;

let fname = localStorage.getItem("firstNameVal");
let lname = localStorage.getItem("lastNameVal");

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  let greeting = document.createElement('p');
  greeting.setAttribute('id', 'greeting');

  document.body.appendChild(greeting);

  $('#greeting').html('Good evening, ' + fname);

  let hasVPN = localStorage.getItem("hasVPN");

  if(hasVPN !== "true"){
    setTimeout(recieveMessage, 3000);
  } else {
    $('#photo').remove();
    $('#username').remove();
    $('#chatinput').remove();
    $('#send').remove();
    $('#chatheader').remove();

    $('#chat').css('background-color', 'grey');
    $('#friends').css('background-color', 'grey');

    $('#greeting').html(`You shouldn't have done that, ${fname}.`)

    $('.lock').css('visibility', 'visible');

    setTimeout(errorMessage, 2000);
  }

}

function recieveMessage() {
  let msg;
  switch (num) {
    case 0:
      msg = "Hey, hey you"
      break;
    case 1:
      msg = `You're ${fname}, right? ${fname} ${lname}?`
      break;
    case 2:
      msg = "Listen, I don't have much time"
      break;
    case 3:
      msg = 'check behind the image of the so-called "Glorious" Leader'
      break;
    case 4:
      msg = 'remember this - username is "JinpingXi", the password is "GreatFirewall"'
      break;
  }
  addMessageToChat(msg);
  if (num < 5) {
    setTimeout(recieveMessage, 2000);
  }
}

//color for char box rgb(0,153,255)
function addMessageToChat(messageToBeSent) {
  let idVal = `message${num}`;

  let message = document.createElement('div');
  message.setAttribute('id', idVal);
  message.setAttribute('class', 'message');

  let chatbox = document.getElementById('recieved');
  chatbox.appendChild(message);

  let jqueryidVal = `#message${num}`;

  $(jqueryidVal).html(messageToBeSent);
  num++;
}

function errorMessage(){
  // Dynamically create a div and store it in a variable. This is the div
  // we will turn into a dialog box. Set its title at the same time.
  let $dialog = $(`<div id='dialogdiv'></div>`).attr(`title`, `The End`);

  //add an image to the body of the dialog box
  $dialog.append(`<p>You were caught and promptly arrested by the Nation's authorities for using unauthorized software and attempting contact outside the country.`);
  // Finally, add the div to the page
  $('body').append($dialog);

  // Now we have our div on the page, transform it into a dialog with jQuery UI's
  // .dialog() method, supplying a number of options to configure it
  $dialog.dialog({


    buttons: {
      "End experience" : function() {
        window.location.href = "../Ending/Ending.html";
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
    top: 0.5 * ($(window).height() - $dialog.parent().height()),
    left: 0.5 * ($(window).width() - $dialog.parent().width())
  });
}
