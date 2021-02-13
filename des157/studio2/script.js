(function(){
    'use strict'

    document.getElementById('firstItem').addEventListener('click', change1);
    document.getElementById('secondItem').addEventListener('click', change2);
    document.getElementById('thirdItem').addEventListener('click', change3);
    document.getElementById('fourthItem').addEventListener('click', change4);
    document.getElementById('fifthItem').addEventListener('click', change5);

    function change1() {
        document.getElementById("changingImage").innerHTML='<img src = images/m3.png>';
    }

    function change2() {
        document.getElementById("changingImage").innerHTML='<img src = images/m1.png>';
    }

    function change3() {
        document.getElementById("changingImage").innerHTML='<img src = images/m2.png>';
    }

    function change4() {
        document.getElementById("changingImage").innerHTML='<img src = images/m4.png>';
    }

    function change5() {
        document.getElementById("changingImage").innerHTML='<img src = images/m5.png>';
    }

}());
