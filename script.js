$(document).ready(function () {

    $("form").submit(function () {
        $("input").attr("minlength", "5")
        validation()
        if ($("input").val() === "") {
            alert("Rempli tout les champs")
        }
        else {
            alert("Good!")
        }
        return false;
    })

    $("#btnreset").click(function () {
        $("input").val("");
    })

    $('#password, #password_confirm').keyup(function () {
        validation()
    });
})

function validation() {
    var password = $('#password');
    var confirm = $('#password_confirm');
    if (password.val() == confirm.val()) {
        password.css('border', '3px solid green');
        confirm.css('border', '3px solid green');
    } else {
        confirm.css('border', '3px solid red');
    }
}