$(function () {
    // visual slide
    $('.visual').slick({
        autoplay: true,
        dots: true
    });


    // section3 slide
    $('.section3 .event').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });


    // top button
    $('.btn_top').click(function () {
        $('html, body').animate({'scrollTop': 0}, 500);
    });


    // mobile button
    $('.m_btn').click(function () {
        $('.cover').fadeIn();
        $('.m_gnb').animate({'left': 0}, 500);
        $('html, body').css('overflow', 'hidden');
    });

    $('.cover').click(function () {
        $('.m_gnb').animate({'left': '-100%'}, 500);
        $('.cover').fadeOut();
        $('html, body').css('overflow', 'scroll');
    });


    // 화면의 크기(해상도)가 767px 이하가 되면 슬라이드의 좌우 버튼 숨김
    $(window).resize(function () {
        console.log("크기조절");

        const num = $(this).width();
        console.log(num);

        if(num <= 767){
            $('main .visual .slick-prev, main .visual .slick-next').hide();
            $('main .visual .slick-dots').show();
        }else{
            $('main .visual .slick-prev, main .visual .slick-next').show();
            $('main .visual .slick-dots').hide();
        };

        // 창의 크기를 조절하면 PC버전의 이미지를 mobile버전으로 교체
        if(num <= 767){
            $('main .visual .visual1 img').attr('src', './images/visual01_m.jpg');
            $('main .visual .visual2 img').attr('src', './images/visual02_m.jpg');
            $('main .visual .visual3 img').attr('src', './images/visual03_m.jpg');
            $('main .visual .visual4 img').attr('src', './images/visual04_m.jpg');
        }else{
            $('main .visual .visual1 img').attr('src', './images/visual01.jpg');
            $('main .visual .visual2 img').attr('src', './images/visual02.jpg');
            $('main .visual .visual3 img').attr('src', './images/visual03.jpg');
            $('main .visual .visual4 img').attr('src', './images/visual04.jpg');
        };

        // section1 box 이미지 교체
        if(num <= 767){
            $('main .section1 .box1 img').attr('src', './images/img_story01_m.jpg');
            $('main .section1 .box2 img').attr('src', './images/img_story02_m.jpg');
            $('main .section1 .box3 img').attr('src', './images/img_story03_m.jpg');
        }else{
            $('main .section1 .box1 img').attr('src', './images/img_story01.jpg');
            $('main .section1 .box2 img').attr('src', './images/img_story02.jpg');
            $('main .section1 .box3 img').attr('src', './images/img_story03.jpg');
        };

        // section3 slide 이미지 교체
        if(num <= 767){
            $('main .section3 .event .s_image1 img').attr('src', './images/img_renewalevent1_m.jpg');
            $('main .section3 .event .s_image2 img').attr('src', './images/img_renewalevent2_m.jpg');
            $('main .section3 .event .s_image3 img').attr('src', './images/img_facebookevent160816_m.jpg');
            $('main .section3 .event .s_image4 img').attr('src', './images/img_blogevent160816_m.jpg');
        }else{
            $('main .section3 .event .s_image1 img').attr('src', './images/img_renewalevent1.jpg');
            $('main .section3 .event .s_image2 img').attr('src', './images/img_renewalevent2.jpg');
            $('main .section3 .event .s_image3 img').attr('src', './images/img_facebookevent160816.jpg');
            $('main .section3 .event .s_image4 img').attr('src', './images/img_blogevent160816.jpg');
        };
    });


    // 창의 크기를 조절하는 EVENT가 일어나지 않아도 mobile 사이즈로 표시
    let num = $(window).width();

    if(num <= 767){
        $('main .visual .slick-prev, main .visual .slick-next').hide();
        $('main .visual .slick-dots').show();
    }else{
        $('main .visual .slick-prev, main .visual .slick-next').show();
        $('main .visual .slick-dots').hide();
    };

    if(num <= 767){
        $('main .visual .visual1 img').attr('src', './images/visual01_m.jpg');
        $('main .visual .visual2 img').attr('src', './images/visual02_m.jpg');
        $('main .visual .visual3 img').attr('src', './images/visual03_m.jpg');
        $('main .visual .visual4 img').attr('src', './images/visual04_m.jpg');
    }else{
        $('main .visual .visual1 img').attr('src', './images/visual01.jpg');
        $('main .visual .visual2 img').attr('src', './images/visual02.jpg');
        $('main .visual .visual3 img').attr('src', './images/visual03.jpg');
        $('main .visual .visual4 img').attr('src', './images/visual04.jpg');
    };

    if(num <= 767){
        $('main .section1 .box1 img').attr('src', './images/img_story01_m.jpg');
        $('main .section1 .box2 img').attr('src', './images/img_story02_m.jpg');
        $('main .section1 .box3 img').attr('src', './images/img_story03_m.jpg');
    }else{
        $('main .section1 .box1 img').attr('src', './images/img_story01.jpg');
        $('main .section1 .box2 img').attr('src', './images/img_story02.jpg');
        $('main .section1 .box3 img').attr('src', './images/img_story03.jpg');
    };

    if(num <= 767){
        $('main .section3 .event .s_image1 img').attr('src', './images/img_renewalevent1_m.jpg');
        $('main .section3 .event .s_image2 img').attr('src', './images/img_renewalevent2_m.jpg');
        $('main .section3 .event .s_image3 img').attr('src', './images/img_facebookevent160816_m.jpg');
        $('main .section3 .event .s_image4 img').attr('src', './images/img_blogevent160816_m.jpg');
    }else{
        $('main .section3 .event .s_image1 img').attr('src', './images/img_renewalevent1.jpg');
        $('main .section3 .event .s_image2 img').attr('src', './images/img_renewalevent2.jpg');
        $('main .section3 .event .s_image3 img').attr('src', './images/img_facebookevent160816.jpg');
        $('main .section3 .event .s_image4 img').attr('src', './images/img_blogevent160816.jpg');
    };
})