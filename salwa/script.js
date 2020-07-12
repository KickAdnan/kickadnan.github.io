/*
Background Gradients From -- 
https://uigradients.com
*/

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 8)
        greet = 'Good Morning Sunshine!';
    else if (hrs >= 8 && hrs <= 24)
        greet = 'The moon is beautiful, isn’t it?';


    document.getElementById('lblGreetings').innerHTML =
         greet ;