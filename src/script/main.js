$(function () { // wait for document ready
    pulse();
    $('.headerImage').click(pulse);

    $("#weddingLink").click(function() {
        $('html, body').animate({
            scrollTop: $('#wedding').offset().top
        }, 1000);
    });

    $("#dressCodeLink").click(function() {
        $('html, body').animate({
            scrollTop: $('#dressCode').offset().top
        }, 1000);
    });

    $("#giftsLink").click(function() {
        $('html, body').animate({
            scrollTop: $('#gifts').offset().top
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop()  <= 0 ){
            pulse();
        }
    });

    setBouqetImageSize();

    $(window).resize(function() {
        initDressCodeSwipper();
        setBouqetImageSize();
    });

    initSwiper();
    initDressCodeSwipper();


    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerHook: 0, offset: 0, duration: "60%" })
        .setPin("#header", {pushFollowers: false} )
        //.addIndicators({name: "1 (duration: 200)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#parallax1", duration: "200%" })
        .setTween(".backdround1", {y: "70%", ease: "linear"})
        //.addIndicators({name: "2 (duration: 200%)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#wedding", duration: "60%" })
        .setPin("#wedding", {pushFollowers: true} )
        // .addIndicators({name: "3 (duration: 500)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#wedding"})
        .setClassToggle("#key1", "pulse")
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#weddingKey", duration: "30%" })
        .setPin("#weddingKey", {pushFollowers: false} )
        //.addIndicators({name: "4 (duration: 300)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#weddingKey"})
        .setClassToggle("#key2", "pulse")
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0.2, triggerElement: "#parallax2", duration: "200%" })
        .setTween(".backdround2", {y: "%", ease: "linear"})
        //.addIndicators({name: "6 (duration: 200%)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#dressCode", duration: "60%" })
        .setPin("#dressCode", {pushFollowers: true} )
        // .addIndicators({name: "3 (duration: 500)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#dressCodeKey", duration: "60%" })
        .setPin("#dressCodeKey", {pushFollowers: false} )
        //.addIndicators({name: "4 (duration: 300)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#dressCodeKey"})
        .setClassToggle("#key3", "pulse")
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#paralax3Section", duration: "200%"})
        .setTween(".backdround3", {y: "70%", ease: "linear"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 0, triggerElement: ".gifts", offset: "0", duration: "60%" })
        .setPin(".gifts", {pushFollowers: false} )
        //.addIndicators({name: "6 (duration: 100%)"})
        .addTo(controller);

    new ScrollMagic.Scene({triggerHook: 1, triggerElement: ".filler"})
        .setPin(".backdround3", {pushFollowers: true} )
        .addTo(controller);
});

function pulse(){
    $('.headerImage').addClass('pulse');
    window.setTimeout(function() {
        $('.headerImage').removeClass('pulse');
    }, 1000);
}

function initSwiper() {
    var mySwiper = new Swiper ('#swiper-restaurant', {
        loop: true,
        // If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 8000,
        autoplayDisableOnInteraction: false
    });
}

var dressCode;

function initDressCodeSwipper(){
    var width = $( window ).width();
    var count = Math.round(width / 400);
    if (count < 1){
        count = 1;
    }

    if (dressCode == null)
    {
        dressCode = new Swiper ('#swiper-dresscode', {
            loop: true,
            slidesPerView: count,
            autoplay: 8000,
            // If we need pagination
            pagination: '.swiper-pagination',
            spaceBetween: 5,
            paginationClickable: true,
            autoplayDisableOnInteraction: false
        });
    }
    else {
        dressCode.params.slidesPerView = count;
        dressCode.update(true);
    }
}

function setBouqetImageSize() {
    $('.flowers').height($('iframe').height());
}


