"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $('.button').on('click', search);
}

function search(){
  let searchTerm = document.getElementById('inputField').value;
  localStorage.setItem("searchTermVal", searchTerm);

  if(searchTerm !== "blank"){
    window.location.href = 'Searchpage.html';
  }
}
