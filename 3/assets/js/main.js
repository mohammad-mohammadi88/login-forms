$(document).ready(function(){
    $('#open').click(function(){
         $('.register-form .form-inner').animate({
            'z-index':'5'
        },2)
        $('.register-form .form-inner').animate({           
            'top':'15px',
            'height':'550px',
            'width':'390px',
            'left':'235px',
            'border-radius':'5px',
            'opacity':'1',
        },300);
        $(this).hide();
        $('.register-form .form-inner').show()
    });
    $('#close').click(function(){
        $('.register-form .form-inner').animate({
            'top':'30px',
            'height':'110px',
            'width':'110px',
            'left':'55px',
            'border-radius':'50%',
            'opacity':'0',
            'z-index':'-1'
        },300);
        $('#open').show();
    })
})