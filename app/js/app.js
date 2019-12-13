let $ = require('jquery');
let TypeIt = require('typeit');

$(document).ready(function() {
    $('#navbarProfileDropdownButton').click(function() {
        $('.navbar-profile-dropdown').toggleClass('active');
    })
})