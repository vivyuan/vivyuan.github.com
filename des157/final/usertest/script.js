(function(){
    'use strict';

    const form1 = document.querySelector('#form1');
    const article1= document.querySelector('#article1');
    const playAgain = document.querySelector('#playAgain');
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
            myResult = `<h2>Yay!</h2>  ${noun1} will be wearing a ${noun2} top, ${adj} bottoms, 
            and carrying a ${verb} purse to the party. Oh! by the way, ${noun1} is going to 
            put on some ${shoes} shoes before leaving to the party. The party is going 
            to be fun!`;
        } else {
            myResult = "You must get ready for the party."; //Every form needs input otherwise this warning will show
        }

        // show result

        article1.querySelector("p").innerHTML = `${myResult}`;
        document.getElementById("article1").style.visibility = "visible";
        document.getElementById("before").style.visibility = "hidden";

        const formData = document.querySelectorAll("input[type=text]");
        
        for(eachField of formData) {
            eachField.value = "";
        }
        
    });

    playAgain.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("article1").style.visibility = "hidden";
        document.getElementById("before").style.visibility = "visible";
    });

    window.onload = function() {
        alert("Hello, Welcome!");
        alert("Please complete the following four tasks, take notes if you need to");
        alert("Task 1: Fill out the form");
        alert("Task 2: Try to clear out the form and retype");
        alert("Task 3: Submit your answer");
        alert("Task 4: Restart the process");
        alert("Thank you for participating, let's do this!");
    }


}());
