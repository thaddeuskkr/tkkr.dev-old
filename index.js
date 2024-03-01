function showabout() {
    $('#about_container').css('display', 'inherit');
    $('#about_container').addClass('animated slideInLeft');
    setTimeout(function () {
        $('#about_container').removeClass('animated slideInLeft');
    }, 1000);
}
function closeabout() {
    $('#about_container').addClass('animated slideOutLeft');
    setTimeout(function () {
        $('#about_container').removeClass('animated slideOutLeft');
        $('#about_container').css('display', 'none');
    }, 1000);
}
function showprojects() {
    $('#projects_container').css('display', 'inherit');
    $('#projects_container').addClass('animated slideInRight');
    setTimeout(function () {
        $('#projects_container').removeClass('animated slideInRight');
    }, 1000);
}
function closeprojects() {
    $('#projects_container').addClass('animated slideOutRight');
    setTimeout(function () {
        $('#projects_container').removeClass('animated slideOutRight');
        $('#projects_container').css('display', 'none');
    }, 1000);
}
function showcontact() {
    $('#contact_container').css('display', 'inherit');
    $('#contact_container').addClass('animated slideInUp');
    setTimeout(function () {
        $('#contact_container').removeClass('animated slideInUp');
    }, 1000);
}
function closecontact() {
    $('#contact_container').addClass('animated slideOutDown');
    setTimeout(function () {
        $('#contact_container').removeClass('animated slideOutDown');
        $('#contact_container').css('display', 'none');
    }, 1000);
}
setTimeout(function () {
    $('#loading').addClass('animated fadeOut');
    setTimeout(function () {
        $('#loading').removeClass('animated fadeOut');
        $('#loading').css('display', 'none');
        $('#box').css('display', 'none');
        $('#about').removeClass('animated fadeIn');
        $('#contact').removeClass('animated fadeIn');
        $('#projects').removeClass('animated fadeIn');
    }, 1000);
}, 1500);
