let $ = require('jquery');
let TypeIt = require('typeit');

$(document).ready(function() {
    alert("OK!");

    $('#navbarProfileDropdownButton').click(function() {
        $('.navbar-profile-dropdown').toggleClass('active');
    })
})