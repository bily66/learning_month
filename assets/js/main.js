let width  = $(window).width();
let height = $(window).height();

$('.hamburger').on('click', function() {
    $(this).toggleClass('opened');
    $('body, header, .black').toggleClass('opened');
});

$('.black, nav a').on('click', function() {
    $('body, header, .hamburger, .black').removeClass('opened');
});

$('.btn-how').click(function() {
    let type = $(this).attr('data-type');
    let btns = `<a href="${how[type].link[0]}" target="_blank" rel="noopener noreferrer" class="btn btn-lg btn-primary">精選課程</a>
        <a href="${how[type].link[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-lg btn-primary">領取課程</a>`;
    $('.modal-how .head img').attr('src', `assets/images/how-${type}-rect.jpg`);
    $('.modal-how .head img').attr('alt', how[type].name);
    $('.modal-how .head .name').text(how[type].name);
    $('.modal-how .head .title').text(how[type].title);
    $('.modal-how .texts .text-primary').text(how[type].quot);
    $('.modal-how .texts .description').text(how[type].description);
    $('.modal-how .btns').html(btns);
    $('.modal-how').fadeIn();
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
    $('body').removeClass('opened');
    $('.black').removeClass('opened modal-black');
});

let slickPopularArrow = 0;
let slickTopicArrow = 0;
let slickHowArrow = 0;

function slickNav() {
    $('.process .slick-arrow').css('top', ($('.process .card-img').height() / 2));
    $('.latest .slick-arrow').css('top', ($('.latest .card-img').height() / 2));
    $('.required .slick-arrow').css('top', ($('.required .card-img').height() / 2));
}

function tabSlickNav(slickPopularArrow, slickTopicArrow, slickHowArrow) {
    $('.slick-popular .slick-arrow').css('top', slickPopularArrow);
    $('.slick-topic .slick-arrow').css('top', slickTopicArrow);
    $('.slick-how .slick-arrow').css('top', slickHowArrow);
}

function navHeight(height) {
    $('header nav').css('height', height);
}

$(window).on('load', function() {
    slickNav();
    navHeight(height);
    slickPopularArrow = $('.slick-popular img').height() / 2;
    slickTopicArrow = $('.slick-topic .image').height() / 2;
    slickHowArrow = $('.slick-how .col-tang img').height() / 2;
    tabSlickNav(slickPopularArrow, slickTopicArrow, slickHowArrow);
});

$(window).on('resize', function() {
    let width  = $(window).width();
    let height = $(window).height();
    slickNav();
    navHeight(height);
    slickPopularArrow = $('.slick-popular img').height() / 2;
    slickTopicArrow = $('.slick-topic .image').height() / 2;
    slickHowArrow = $('.slick-how .col-tang img').height() / 2;
    tabSlickNav(slickPopularArrow, slickTopicArrow, slickHowArrow);
    $('.slick-how').slick("slickSetOption", "draggable", true, true);
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

$('.tabs .tab-nav ul li').on('click', function() {
    let index = $(this).index();
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    $(this).parent().parent().parent().siblings('.tab-content').children().removeClass('active');
    $(this).parent().parent().parent().siblings('.tab-content').children().eq(index).addClass('active');
    $('.slick-popular').slick("slickSetOption", "draggable", true, true);
    $('.slick-topic').slick("slickSetOption", "draggable", true, true);
    tabSlickNav(slickPopularArrow, slickTopicArrow);
})
