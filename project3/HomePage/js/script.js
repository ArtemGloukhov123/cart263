"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let $leader;

//run setup when document is loaded
$(document).ready(setup);

function setup() {
$leader = $("#leader");

$leader.draggable();
}
