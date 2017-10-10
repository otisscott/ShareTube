$(document).ready(function() {
    $('#form3').hide();
    $('#checkbox2').change(function() {
        if (this.checked) {
            $('#form3').show();
        }
        else {
            $('#form3').hide();
        }
    })
});