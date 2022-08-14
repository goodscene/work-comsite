$(document).ready(function(){

    //2021-02-01 헤더 스크롤 스크립트 추가
    $(window).scroll(function() {
        $('header').css({left: 0 - $(this).scrollLeft()});
    });

    //gnb메뉴
    $(".gnb").hover(function(){
        $(".gnb ul").addClass("active");
    }).mouseleave(function(){
        $(".gnb ul").removeClass("active");
    });

    var myArray = ["HANS C&C","RPA","PG","SHOPPINGMALL"];//슬라이드 버튼 이름

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

    //개인정보처리방침 모달
    $("#btnMopen").click(function(){
        $(".agreeModal").attr("style", "display:block");
        // $(".agreeModal").fadeIn();
    });
    $("#btnMclose, .modalLayer").click(function(){
        // $(".agreeModal").attr("style", "display:none");
        $(".agreeModal").fadeOut();
    });

    //페이지 최상단 이동 버튼
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $('.btnGotop').show();
        } else{
            $('.btnGotop').hide();
        }
    });
    $('.btnGotop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

    //2021-02-03 추가
    //메인페이지 스크롤 내리면 나타나는 애니메이션
    $('.business .titleBox *, .business .bizWrap *, .abillity .imgBox, .abillity .titleBox *, .abillity .txtBox li, .banner .banTxt h4, .banner .banTxt p, .banner .banTxt .btnDetail, .banner .imgBox, .support .linkBox01, .support .linkBox02').hide();
    $(window).scroll(function(){
        var win_top = $(window).scrollTop();
        if( win_top >= 300 ){
            $('.business .titleBox *').show();
        }else{
            // $('.business .titleBox *').hide();
        }
        if( win_top >= 650 ){
            $('.business .bizWrap *').show();
        }else{
            // $('.business .bizWrap *').hide();
        }
        if( win_top >= 1600 ){
            $('.abillity .imgBox, .abillity .titleBox *, .abillity .txtBox li').show();
        }else{
            // $('.abillity .imgBox, .abillity .titleBox *, .abillity .txtBox li').hide();
        }
        if( win_top >= 2100 ){
            $('.banner .banTxt h4, .banner .banTxt p, .banner .banTxt .btnDetail').show();
        }else{
            // $('.banner .banTxt h4, .banner .banTxt p, .banner .banTxt .btnDetail').hide();
        }
        if( win_top >= 2300 ){
            $('.banner .imgBox').show();
        }else{
            // $('.banner .imgBox').hide();
        }
        if( win_top >= 2600 ){
            $('.support .linkBox01, .support .linkBox02').show();
        }else{
            // $('.support .linkBox01, .support .linkBox02').hide();
        }
    })
});
