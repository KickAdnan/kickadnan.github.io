/*
Background Gradients From -- 
https://uigradients.com
*/

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 10)
        greet = 'Good Morning Sunshine!';
    else if (hrs >= 10 && hrs <= 17)
        greet = 'Hello Salwa!';
    else if (hrs >= 17 && hrs <= 21)
        greet = 'Hai Yeoppo!';
    else if (hrs >= 21 && hrs <= 24)
        greet = 'Goodnight Sweethearth!';

    document.getElementById('lblGreetings').innerHTML =
         greet ;