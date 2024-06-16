$(document).ready(function(){
    $('.fa-eye-slash').click(function(){
        $('#password').attr('type' , 'text');
        $(this).hide();
        $('.fa-eye').show();
    });
    $('.fa-eye').click(function(){
        $('#password').attr('type' , 'password');
        $(this).hide();
        $('.fa-eye-slash').show();
    });
    $('#submit').click(function(){ 
        if($('#password').attr('type') === 'text'){
            $('#password').attr('type' , 'password');
        }
    })
})