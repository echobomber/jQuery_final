$(function() {
    // 練習更動 logo 連結網址
    $('.logo a').attr({'href':'https://www.hexschool.com/?adsource=gssearch&utm_source=google&utm_medium=cpc&utm_campaign=googleKeyword&gclid=Cj0KCQiA8dH-BRD_ARIsAC24umYTOAbDYWyd4ORkfr-OANH4WkFCuAdnoEcLInJVOuT83WqLQTPfbAUaAlGkEALw_wcB', 'target':'_blank'});
    //摺疊選單
    $('.subMenu').hide();
    //指定第一層 a 
    $('.topMenu-link > li > a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).parent().siblings().children('.subMenu').slideUp();
        $(this).toggleClass('active');
        //動態切換 icon，把自己以外的都先改成 down，再去做判斷 
        $(this).parent().siblings('li').find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
        if($(this).children('i').hasClass('fa-chevron-circle-down')){
            $(this).children('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
        }else{
            $(this).children('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
        }
        $(this).siblings('.subMenu').slideToggle();
    })
    //goTop 效果
    $('.goTop-btn').on('click', function(e){
        $('html, body').animate({scrollTop: 0}, 500);
    })
});