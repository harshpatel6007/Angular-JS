$('.nav-sidebar li').click(function () {
    $('.nav-sidebar li.active').removeClass('active');
    $(this).addClass('active');
});

$('.nav-sidebar li').focusout(function () {
    $('.nav-sidebar li.active').removeClass('active');
});

$('.navbar-nav li').click(function () {
    $('.navbar-nav li.active').removeClass('active');
    $(this).addClass('active');
});

$('.navbar-nav li').focusout(function () {
    console.log("focus out called");
    $('.navbar-nav li.active').removeClass('active');
});