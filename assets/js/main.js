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

$('.btn-close, .modal-close, .black.modal-black').click(function() {
    $('.modal').fadeOut();
    $('body').removeClass('opened');
    $('.black').removeClass('opened modal-black');
    setTimeout(() => {
        $('.modal-process img').attr('src', 'https://dummyimage.com/700x470/f0f0f0/f0f0f0');
        $('.modal-process img').attr('alt', '');
        $('.modal-process h3').text('');
        $('.modal-process p').text('');

        $('.modal-how .head img').attr('src', `https://dummyimage.com/200x200/f0f0f0/f0f0f0`);
        $('.modal-how .head img').attr('alt', '');
        $('.modal-how .head .name').text('');
        $('.modal-how .head .title').text('');
        $('.modal-how .texts .text-primary').text('');
        $('.modal-how .texts .description').text('');
        $('.modal-how .btns').html('');
    
    }, 500);
});

function slickNav(width) {
    let slickProcessArrow;
    let slickPopularArrow;
    let slickTopicArrow;
    let slickHowArrow;

    if (width < 768) {
        slickProcessArrow = (width - 80) * 0.671428571428571 / 2;
        slickPopularArrow = (width - 80) * 0.666666666666667 / 2;
        slickTopicArrow = (width - 80) / 2;
        slickHowArrow = (width - 80) * 0.625 / 2;
    } else {
        slickProcessArrow = $('.slick-process .card .card-img').height() / 2;
        slickPopularArrow = $('.slick-popular .card-item .card-image').height() / 2;
        slickTopicArrow = $('.slick-topic .card-item .image').height() / 2;
        slickHowArrow = $('.slick-how .col-tang img').height() / 2;
    }
    
    $('.slick-process .slick-arrow').css('top', slickProcessArrow);
    $('.slick-popular .slick-arrow').css('top', slickPopularArrow);
    $('.slick-topic .slick-arrow').css('top', slickTopicArrow);
    $('.slick-how .slick-arrow').css('top', slickHowArrow);
}

function navHeight(height) {
    $('header nav').css('height', height);
}

slickNav(width);

$(window).on('load', function() {
    navHeight(height);
    slickNav(width);
});

$(window).on('resize', function() {
    let width  = $(window).width();
    let height = $(window).height();
    $('.slick-popular').slick("slickSetOption", "draggable", true, true);
    $('.slick-topic').slick("slickSetOption", "draggable", true, true);
    $('.slick-how').slick("slickSetOption", "draggable", true, true);
    navHeight(height);
    slickNav(width);
});

$(window).on('scroll', function() {
    let width  = $(window).width();
    let height = $(window).height();
    navHeight(height);
    slickNav(width);

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
    if ( $(this).hasClass('tab-nav-disabled') ) {
        console.log();
        $('.modal-soon h4').text(month['week'+(index+1)].title);
        $('.modal-soon p.description').text(month['week'+(index+1)].description);
        $('.modal-soon p.update').text(month['week'+(index+1)].update);
        $('.modal-soon').fadeIn();
        $('body').addClass('opened');
        $('.black').addClass('opened modal-black');
        return false;
    } else {
        let offsetTop = $(this).parent().parent().parent().parent().offset().top - $('header').height() - 30;
        $(window).scrollTop(offsetTop);
    }
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    $(this).parent().parent().parent().siblings('.tab-content').children().removeClass('active');
    $(this).parent().parent().parent().siblings('.tab-content').children().eq(index).addClass('active');
    $('.slick-popular').slick("slickSetOption", "draggable", true, true);
    $('.slick-topic').slick("slickSetOption", "draggable", true, true);
})
