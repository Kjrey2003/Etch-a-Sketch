const instruct = document.getElementById("instructions");
var old = instruct.innerHTML;

let square = document.createElement('div');
 function putStuff(size){
    if(size > 95){
        document.getElementById('instructions').innerHTML = "Oops! The box cannot be bigger than 80, please reset and enter another number";
        return;
    }
let board = document.querySelector(".pad");
 let squares = board.querySelectorAll("div");
 squares.forEach((div) => div.remove());
 board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 
 let amount = size * size;
 for(let i = 0; i < amount; i++) {
     let square = document.createElement('div');
    	
     square.style.border = "1px solid black";
     square.style.backgroundColor = 'white';
     board.insertAdjacentElement('beforeend', square);
     
     
     square.addEventListener("mouseover", function(){
        square.style.backgroundColor = document.getElementById("color").value;
       })
    }
    
    }
    putStuff(16);
 
   
 
 
 

 


 


