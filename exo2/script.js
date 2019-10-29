$(document).ready(function () {
    $(".btn").click(function () {
        $(".container").append('<div class="row">' +
            '<div class="form-group col-2"><label class="Phone" for="exampleInputPhone">Phone</label></div>' +
            '<div class="col-4"><input type="tel" class="form-control Number" id="exampleInputPhone" placeholder="Number"></div>' +
            '<div class="col-4"><select class="form-control" id="examplePhone"><option>Mobile</option><option>Professionnal</option><option>House</option><option>Other</option></select></div>' +
            '<div class="col-2"></div></div>');
    })
})

$("form").submit(function () {
    return false;
})

$("input").val()
