let width  = $(window).width();
let height = $(window).height();

$('.hamburger').on('click', function() {
    $(this).toggleClass('opened');
    $('body, header, .black').toggleClass('opened');
});

$('.black, nav a').on('click', function() {
    $('body, header, .hamburger, .black').removeClass('opened');
});

$('.btn-video').click(function() {
    let videoUrl = $(this).attr('data-video');
    $('.modal-video iframe').attr('src', `${videoUrl}?rel=0&autoplay=1`);
    $('.modal-video').fadeIn();
    $('body').addClass('opened');
    $('.black').addClass('opened modal-black');
});

$('section.process button').click(function() {
    let type = $(this).attr('data-process');
    $('.modal-process img').attr('src', `assets/images/process-${type.toLowerCase()}.jpg`);
    $('.modal-process img').attr('alt', process[type].title);
    $('.modal-process h3').text(process[type].title);
    $('.modal-process p').text(process[type].text);
    $('.modal-process').fadeIn();
    $('body').addClass('opened');
    $('.black').addClass('opened modal-black');
});

$('.btn-close, .black.modal-black').click(function() {
    $('.modal').fadeOut();
    $('.modal-video iframe').attr('src', '');
    $('body').removeClass('opened');
    $('.black').removeClass('opened modal-black');
    setTimeout(() => {
        $('.modal-process img').attr('src', 'https://dummyimage.com/700x470/000/fff&text=+');
        $('.modal-process img').attr('alt', '');
        $('.modal-process h3').text('');
        $('.modal-process p').text('');
    }, 500);
});

$(window).on('load', function() {
    $('.process .slick-arrow').css('top', ($('.process .card-img').height() / 2));
    $('.latest .slick-arrow').css('top', ($('.latest .card-img').height() / 2));
    $('.required .slick-arrow').css('top', ($('.required .card-img').height() / 2));
});


$(window).on('scroll', function() {
    let scroll = $(window).scrollTop();
    if ( scroll > (height - 50) ) {
        $('header').addClass('scroll');
        $('header nav ul a').removeClass('link-light').addClass('link-dark');
        $('.hamburger span').removeClass('bg-light').addClass('bg-dark');
        if ( width < 992 ) {
            $('header nav').removeClass('bg-black').addClass('bg-light');
        }
    } else {
        $('header').removeClass('scroll');
        $('header nav ul a').removeClass('link-dark').addClass('link-light');
        $('.hamburger span').removeClass('bg-dark').addClass('bg-light');
        if ( width < 992 ) {
            $('header nav').removeClass('bg-light').addClass('bg-black');
        }
    }
})
