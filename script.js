$(document).ready(function () {
    $("input").attr("minlength", "5")

    $("#formulaire").validate({
        rules: {
            password: "required",
            confirmpassword: {
                equalTo: "#password"
            }
        },
    })
})