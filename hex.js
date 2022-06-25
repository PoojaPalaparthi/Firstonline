c = document.querySelectorAll(".color-box .fillcolor"); 
// will selects all the elements which are having the mentioned class names.

function generatecolor(){
    c.forEach((color) => { // in this statement color is an user-defined name
    let hexcode="#"+ Math.random().toString(16).substring(2 , 8); 
    // by using tostring() we are converting all the random values into string format where it is going to have characters too...
    color.style.backgroundColor = hexcode;  
    color.innerHTML=hexcode; 
    });
}

