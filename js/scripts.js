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


        e.preventDefault();
        e.stopPropagation();

        payment = getElementById("cc-outlet")  + " payment " + getElementById("cc-payment");
        //alert ( getElementById("cc-outlet")  + " payment " + getElementById("cc-payment"));
        addNewItemToList(payment);



    }
    
    form.addClass('was-validated');
});


function addNewItemToList(itemtext) {
    var ul = document.getElementById("payments");
    var li = document.createElement("li");
    li.classList.add('list-group-item');
    li.appendChild(document.createTextNode(itemtext));
    ul.appendChild(li);
}
function getElementById(id){

    return document.getElementById(id).value;
}


