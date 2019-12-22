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
        console.log($(window).width());
        if($(window).width() > 768) {
            $('.navbar-profile-dropdown').toggleClass('active');
        } else {
            $('.navbar-menu-responsive').addClass('active');
            $('.navbar-menu-responsive + .bg-overlay').click(function(e) {
                if (e.target == this) {
                    $('.navbar-menu-responsive').removeClass('active');
                }
            })
        }
    })
})