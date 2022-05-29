let width  = $(window).width();
let height = $(window).height();

$('.hamburger').on('click', function() {
    $(this).toggleClass('opened');
    $('body, header, .black').toggleClass('opened');
});

$('.black, nav a').on('click', function() {
    $('body, header, .hamburger, .black').removeClass('opened');
});

$('section.opening > .imgs').each(function() {
    let img = {
        width:  $(this).width(),
        height: $(this).height(),
    };
    console.log(img.width, img.height);
});

$('.btn-video').click(function() {
    let videoUrl = $(this).attr('data-video');
    $('.modal-video iframe').attr('src', `${videoUrl}?rel=0&autoplay=1`);
    $('.modal-video').fadeIn();
    $('body').addClass('opened');
    $('.black').addClass('opened modal-black');
});

$('.btn-close, .black.modal-black').click(function() {
    $('.modal-video iframe').attr('src', '');
    $('.modal').fadeOut();
    $('body').removeClass('opened');
    $('.black').removeClass('opened modal-black');
});

