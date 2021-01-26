(function(){
    'use strict';

    var form1 = document.querySelector('#form1');
    var article1= document.querySelector('#article1');
    var eachField= [];

    form1.addEventListener('submit', function(event){
        event.preventDefault();
        var noun1 = document.querySelector('#noun1').value;
        var noun2 = document.querySelector('#noun2').value;
        var adj = document.querySelector('#adj').value;
        var verb = document.querySelector('#verb').value;

        if(noun1 && noun2 && adj && verb) {
            var myResult = `Your result: ${noun1}, ${noun2}, ${adj}, ${verb}`;
        } else {
            var myResult = "You must fill the blanks to receive your result";
        }

        article1.innerHTML = myResult;

        var formData = document.querySelectorAll("input[type=text]");
        for(eachField of formData) {
            eachField.value = "";
        }
        
    });


}());
