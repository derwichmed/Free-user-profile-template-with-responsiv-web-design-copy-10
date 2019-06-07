$(function (){
    $('.user_profile .user_profile_body > header .item').mouseover(function (){
        img_hover = $(this).attr('img-hover');
        index = $(this).attr('profile-item-index');
        for(i=0;i<$('.user_profile .user_profile_body > header .item').length;i++){
            img_init = $('.user_profile .user_profile_body > header .item').eq(i).attr('img-init');
            $('.user_profile .user_profile_body > header .item').eq(i)
                    .find('img').attr('src',img_init);
        }
        $('.user_profile .user_profile_body > header .item').removeClass('item_hover');
        if($(window).width() <= 900){
            $('#effect_div').hide();
            $('.user_profile .user_profile_body > header').fadeOut("slow");
        }
       $(this).addClass('item_hover');
       $(this).find('img').attr('src',img_hover);
       $('.user_profile .user_profile_body .user_info_item:visible').hide();
       $('.user_profile .user_profile_body .user_info_item').eq(index).show();
    });
    
    $('.user_profile .user_profile_body > .header_from_mobile img').click(function (){
       $('#effect_div').show();
       $('.user_profile .user_profile_body > header').fadeIn("slow");
    });
    
    $('#effect_div').click(function (){
        $('#effect_div').hide();
        $('.user_profile .user_profile_body > header').fadeOut("slow");
    });
});