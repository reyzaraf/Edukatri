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

    $('#tbcPhotosCarousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive:{
            0: {
                items: 1
            }
        },
        nav: true,
        dots: false,
        navText: [
            '<i class="material-icons">keyboard_arrow_left</i>',
            '<i class="material-icons">keyboard_arrow_right</i>'
        ]
    })
})