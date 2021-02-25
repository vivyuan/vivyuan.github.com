(function(){
    'use strict';

    const form1 = document.querySelector('#form1');
    const article1= document.querySelector('#article1');
    let eachField= [];

    form1.addEventListener('submit', function(event){
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const shoes = document.querySelector('#shoes').value;
        let myResult;

        // Below are for the results
        if(noun1 && noun2 && adj && verb && shoes) {
            myResult = `Yay!  ${noun1} will be wearing a ${noun2} top, ${adj} bottoms, 
            and carrying a ${verb} bag to the party. Oh! by the way, ${noun1} is going to 
            put on some ${shoes} shoes before leaving to the party. The party is going 
            to be fun!`;
        } else {
            myResult = "You must get ready for the party."; //Every form needs input otherwise this warning will show
        }

        article1.innerHTML =   `<p>${myResult}</p>`;

        const formData = document.querySelectorAll("input[type=text]");
        
        for(eachField of formData) {
            eachField.value = "";
        }
        
    });


}());
