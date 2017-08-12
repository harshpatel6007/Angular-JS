$('.nav-sidebar li').click(function () {
    $('.nav-sidebar li.active').removeClass('active');
    $(this).addClass('active');
});