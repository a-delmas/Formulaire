$(document).ready(function () {

    $("#btnconfirm").click(function () {

        $("input").attr("minlength", "5")
        validation()

    })
    $('#formulaire').keyup(function () {
        var password = $('#password');
        var confirm = $('#password_confirm');
        if (password.val() == confirm.val()) {
            password.css('border', '3px solid green');
            confirm.css('border', '3px solid green');
        } else {
            confirm.css('border', '3px solid red');
        }
        if ($("input").val() == ("input").html("")) {
            alert("Rempli tout les champs")
    
        }
    });

})

function validation() {
    var password = $('#password');
    var confirm = $('#password_confirm');
    if (password.val() == confirm.val()) {
        console.log("succes");

    } else {
        console.log("pas pareil");

    }
}