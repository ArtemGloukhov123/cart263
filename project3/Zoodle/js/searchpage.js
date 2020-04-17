"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $('#smalllogo').on('click', function(){
    window.location.href = 'Zoodle.html';
  });

  document.getElementById("smalllogo").style.cursor = "pointer";

  let searchTerm = localStorage.getItem("searchTermVal");

  document.getElementById('searchbar').value = searchTerm;

  let vpnVal = localStorage.getItem('hasVPN');
  console.log(vpnVal);
}
