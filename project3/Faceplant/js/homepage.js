"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let textFieldChars;

let password = "GloryToOurLeader45";

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  let greeting = document.createElement('p');
greeting.setAttribute('id', 'greeting');

document.body.appendChild(greeting);

let firstname = localStorage.getItem('firstNameVal');

$('#greeting').html('Hello, ' + firstname);
}
