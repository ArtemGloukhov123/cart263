"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let messageSound = new Audio("../sounds/message.mp3");

//needed for giving recieved messages individual id's
let num = 0;

//get the first and last names entered in the previous page
let fname = localStorage.getItem("firstNameVal");
let lname = localStorage.getItem("lastNameVal");

//run setup when document is loaded
$(document).ready(setup);

function setup() {

  //creates a greeting for the user at the top of the page, with their name
  let greeting = document.createElement('p');
  greeting.setAttribute('id', 'greeting');

  document.body.appendChild(greeting);

  $('#greeting').html('Hello, ' + fname);

  //if the user does not have the VPN, run the usual code
  //if the VPN has already been gotten, lock down faceplant and end the experience

  //find out if VPN is active
  let hasVPN = localStorage.getItem("hasVPN");

  if(hasVPN !== "true"){
    setTimeout(recieveMessage, 3000);
  } else {
    //remove non-essential divs
    $('#photo').remove();
    $('#username').remove();
    $('#chatinput').remove();
    $('#send').remove();
    $('#chatheader').remove();

    //display blocks of grey
    $('#chat').css('background-color', 'grey');
    $('#friends').css('background-color', 'grey');

    //change the greeting
    $('#greeting').html(`You shouldn't have done that, ${fname}.`)

    //display lock symbols
    $('.lock').css('visibility', 'visible');

    //send the error message, after a delay
    setTimeout(errorMessage, 2000);
  }

}

//cycle through the messages that need to be sent
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
  messageSound.play();
  
  //have a delay between each message
  if (num < 5) {
    setTimeout(recieveMessage, 2000);
  }
}

//create a div as a message sent by an anonymous person in the chat
function addMessageToChat(messageToBeSent) {
  //each message needs a different id in order to display different messages
  let idVal = `message${num}`;

  //create the div
  let message = document.createElement('div');
  message.setAttribute('id', idVal);
  message.setAttribute('class', 'message');

  //append it to the chat box
  let chatbox = document.getElementById('recieved');
  chatbox.appendChild(message);

  let jqueryidVal = `#message${num}`;

  //display the message in the div
  $(jqueryidVal).html(messageToBeSent);
  num++;
}

//displays a message, signifying the end of the interactive experience
function errorMessage(){

  //create a div to be turn into a dialog box
  let $dialog = $(`<div id='dialogdiv'></div>`).attr(`title`, `The End`);

  //add text to the div
  $dialog.append(`<p>You were caught and promptly arrested by the Nation's authorities for using unauthorized software and attempting contact outside the country.</p>`);

  //Add the div to the page
  $('body').append($dialog);

  //turn the div into a dialog box
  $dialog.dialog({

  //add a button to take the user to the ending screen
    buttons: {
      "End experience" : function() {
        window.location.href = "../Ending/Ending.html";
      }
    },

    //contain within body
    containment: 'body',
    width: 600
  });

  $dialog.parent().offset({
    top: 0.5 * ($(window).height() - $dialog.parent().height()),
    left: 0.5 * ($(window).width() - $dialog.parent().width())
  });
}
