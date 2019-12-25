let $ = require('jquery');
let TypeIt = require('typeit');

$(document).ready(function() {
    $('#pageHome .nav-toggle').click(function() {
        $('#pageHome .nav-menu').addClass('active');
        $('#pageHome .bg-overlay').click(function(e) {
            if (e.target == this) {
                $('#pageHome .nav-menu').removeClass('active');
            }
        })
    }) 

    $('#navbarProfileDropdownButton').click(function() {
        $('.navbar-profile-dropdown').toggleClass('active');
    })

    $('#navbarNotifDropdownButton').click(function() {
        $('.navbar-notif-dropdown').toggleClass('active');
    })

    $('.navbar-main-toggle').click(function() {
        $('.navbar-menu-responsive').addClass('active');
        $('.navbar-menu-responsive + .bg-overlay').click(function(e) {
            if (e.target == this) {
                $('.navbar-menu-responsive').removeClass('active');
            }
        })
    });
})