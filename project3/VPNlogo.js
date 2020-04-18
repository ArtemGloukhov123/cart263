"use strict";

/********************************************************************
Displays the VPN logo in top right corner of all webpages when VPN is activated
*********************************************************************/

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  let vpnStatus = localStorage.getItem('hasVPN');

  if(vpnStatus === "true"){
    displayLogo();
  }
}

function displayLogo() {
  let logo = document.createElement('img');
  logo.setAttribute('src', '../VPN/assets/images/VPNlogo.png');
  logo.setAttribute('id', 'smallLogo');

  document.body.appendChild(logo);

  $('#smallLogo').css('position', 'absolute');
  $('#smallLogo').css('top', '35px');
  $('#smallLogo').css('right', '5px');
  $('#smallLogo').css('width', '30px');
  $('#smallLogo').css('opacity', '0.5');
}
