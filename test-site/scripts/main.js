let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/australia-1296727_1280-1030x850.png') {
        myImage.setAttribute ('src' , 'images/qhfkz6t6-1396646619.jpg');
    } else {
        myImage.setAttribute('src' , 'images/australia-1296727_1280-1030x850.png');
    }    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if (!myName || myName ===null) {
            setUserName();
        } else {
            localStorage.setItem('name' , myName);
            myHeading.innerHTML = 'Australia is cool,' + myName;
        }  
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Australia is coll,' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
