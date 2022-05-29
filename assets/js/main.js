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

$('section.process .card-img').click(function() {
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

