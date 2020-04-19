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

  setTimeout(recieveMessage, 3000);
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
