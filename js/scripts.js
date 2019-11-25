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
        count = getChecked()
        for (i =0;i<count;i++) {
            acceptedProbability = Math.floor(Math.random() * 10);
            rejected = (acceptedProbability>6) ? true : false;
            if (rejected) {
                addNewItemToList(payment + ' rejected' + ' - ' + new Date().toLocaleTimeString() , "red");
            } else {
                addNewItemToList(payment + ' approved' + ' - ' + new Date().toLocaleTimeString() , "green" );
            }


        }
    }
    
    form.addClass('was-validated');
});


function addNewItemToList(itemtext, color) {
    var ul = document.getElementById("payments");
    var li = document.createElement("li");
    li.classList.add('list-group-item');
    li.classList.add(color);
    li.appendChild(document.createTextNode(itemtext));
    //ul.appendChild(li);

    ul.insertBefore(li, ul.childNodes[0]);
}
function getElementById(id){

    return document.getElementById(id).value;
}

function getChecked(){

 if (document.getElementById("inlineRadio1").checked) {
    return 1;
 }
 else if (document.getElementById("inlineRadio2").checked) {
    return 5;
 }
 else if (document.getElementById("inlineRadio3").checked) {
     return 10;
  }
}

