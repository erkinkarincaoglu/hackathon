$(function () {
  $('[data-toggle="popover"]').popover()
})


$("#payment-button").click(function(e) {


    // Fetch form to apply Bootstrap validation
    var form = $(this).parents('form');


    
    if (form[0].checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {


        alert ( getElementById("cc-payment") );



    }
    
    form.addClass('was-validated');
});



function getElementById(id){

    return document.getElementById(id).value;
}

