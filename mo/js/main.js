$(document).ready(function(){
    //헤더 - 스크롤 내리면 배경 바꾸기
    $(window).scroll(function() {
        var height = $(document).scrollTop();
        if(height > 0) {
            $('header .hdInner').addClass('bgWhite');
        }else if (height == 0) {
            $('header .hdInner').removeClass('bgWhite');
        }
    })

    //햄버거 메뉴 hamburger
    $(".btnHamb").click(function() {
        $("nav, .pageCover, html").addClass("open");
        window.location.hash = "#open";
    });
    window.onhashchange = function() {
        if (location.hash != "#open") { // URL에 #가 있을 경우 아래 명령을 실행
            $("nav, .pageCover, html").removeClass("open");
        }
    };

    //gnb toggle 토글 메뉴
    $(".gnb > li > a").on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('active')) {
            $(this).removeClass('active').next('ul').stop().slideUp(200);
        } else {
            $(this).addClass('active').next('ul').stop().slideDown(200);
        }
    });

    //슬라이드 버튼 이름
    var myArray = ["HANS C&C","RPA","PG","SHOPPINGMALL"];

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        parallax: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable : true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + myArray[index] + '</span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
        speed :800,
        effect : "fade",
        // autoplay: {
        //     delay: 4000,
        //   },
    });

    //푸터 토글 footer toggle
    $(".brand").click(function(e) {
        e.preventDefault();
        $("#hk-footer").toggleClass("active");
    });

    //개인정보처리방침 모달
    $("#btnMopen").click(function() {
        $(".agreeModal").attr("style", "display:block");
        // $(".agreeModal").fadeIn();
    });
    $("#btnMclose, .modalLayer").click(function() {
        // $(".agreeModal").attr("style", "display:none");
        $(".agreeModal").fadeOut();
    });

    //페이지 최상단 이동 버튼
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
            $('.btnGotop').show();
        } else {
            $('.btnGotop').hide();
        }
    });
    $('.btnGotop').click(function() {
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

    //2021-02-03 추가
    //메인페이지 스크롤 내리면 나타나는 애니메이션
    $('.business .titleBox *, .business .bizWrap li:nth-of-type(1) p, .business .bizWrap li:nth-of-type(2) p, .business .bizWrap li:nth-of-type(3) p, .abillity .imgBox, .abillity .titleBox *, .abillity .txtBox li:nth-of-type(1), .abillity .txtBox li:nth-of-type(2), .abillity .txtBox li:nth-of-type(3), .banner .banTxt h4, .banner .banTxt p, .banner .banTxt .btnDetail, .banner .imgBox, .support .linkBox01, .support .linkBox02').hide();
    $(window).scroll(function(){
        var win_top = $(window).scrollTop();
        if( win_top >= 200 ){
            $('.business .titleBox *').show();
        }else{
            // $('.business .titleBox *').hide();
        }
        if( win_top >= 800 ){
            $('.business .bizWrap li:nth-of-type(1) p').show();
        }else{
            // $('.business .bizWrap li:nth-of-type(1) p').hide();
        }
        if( win_top >= 1300 ){
            $('.business .bizWrap li:nth-of-type(2) p').show();
        }else{
            // $('.business .bizWrap li:nth-of-type(2) p').hide();
        }
        if( win_top >= 1750 ){
            $('.business .bizWrap li:nth-of-type(3) p').show();
        }else{
            // $('.business .bizWrap li:nth-of-type(3) p').hide();
        }
        if( win_top >= 2100 ){
            $('.abillity .imgBox, .abillity .titleBox *').show();
        }else{
            // $('.abillity .imgBox, .abillity .titleBox *').hide();
        }
        if( win_top >= 2250 ){
            $('.abillity .txtBox li:nth-of-type(1)').show();
        }else{
            // $('.abillity .txtBox li:nth-of-type(1)').hide();
        }
        if( win_top >= 2350 ){
            $('.abillity .txtBox li:nth-of-type(2)').show();
        }else{
            // $('.abillity .txtBox li:nth-of-type(2)').hide();
        }
        if( win_top >= 2550 ){
            $('.abillity .txtBox li:nth-of-type(3)').show();
        }else{
            // $('.abillity .txtBox li:nth-of-type(3)').hide();
        }
        if( win_top >= 2700 ){
            $('.banner .banTxt h4, .banner .banTxt p, .banner .banTxt .btnDetail, .banner .imgBox').show();
        }else{
            // $('.banner .banTxt h4, .banner .banTxt p, .banner .banTxt .btnDetail, .banner .imgBox').hide();
        }
        if( win_top >= 2900 ){
            $('.support .linkBox01, .support .linkBox02').show();
        }else{
            // $('.support .linkBox01, .support .linkBox02').hide();
        }
    })
});
