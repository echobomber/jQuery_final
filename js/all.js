$(function() {
    //摺疊選單
    $('.subMenu').hide();
    $('.topMenu-link > li > a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).parent().siblings().children('.subMenu').slideUp();
        $(this).toggleClass('active');
        $(this).siblings('.subMenu').slideToggle();
    })
    //goTop
    $('.goTop-btn').on('click', function(e){
        $('html, body').animate({scrollTop: 0}, 500);
    })
});