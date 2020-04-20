"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
//login info for this page
let correctLogin = "JinpingXi";
let correctPassword = "GreatFirewall";

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $('#signin').on('click', checkLoginInfo);
}

//checks that the login and password are correct
function checkLoginInfo() {
  //get value entered into input fields
  let login = document.getElementById('login').value;
  let password = document.getElementById('password').value;

  //check that they are correct
  if(login === correctLogin){
    if(password === correctPassword){
      window.location.href = "../VPN/VPN.html"
    } else {
      magicWord();
    }
  } else {
    magicWord();
  }
}

//display a reference to a certain dino movie
function magicWord(){
  $('#magicword').css('visibility', 'visible');

  responsiveVoice.speak("ah ah aaah. You didn't say the magic word", "UK English Male", {
      rate: 0.9,
      pitch: 0.9
    });

    setTimeout(function(){
      $('#magicword').css('visibility', 'hidden');
    }, 4000);
}
