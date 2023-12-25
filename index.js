// Write your code here!

const element = document.getElementById("main");
element.remove(); 

var newHeader = document.createElement('h1');
newHeader.textContent = 'New Header Content';
newHeader.id='victory';
newHeader.textContent += ' is the champion';
