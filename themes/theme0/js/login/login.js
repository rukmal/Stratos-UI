$(document).ready(function(){
    $('#username').focus();

    $('#submit-btn').click(function () {
        var btn = $(this);
        btn.button('loading');
        var username = $('#username'); // Get the username field
        var password = $('#password'); // Get the password field
        $.ajax({
            type: "POST",
            url: caramel.context + "/controllers/login/login.jag",
            dataType: 'json',
            data: { username: username.val() , password: password.val() },
            success:function(data){
                if(data.status ===1){
                    window.location = caramel.context;
                }else{

                }
            }
            })
            .always(function () {
                btn.button('reset')
            });

    });
});