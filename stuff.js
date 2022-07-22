const Black = document.getElementById("black") 
let square = document.createElement('div');
function putStuff(size){
let board = document.querySelector(".pad");
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.border = "1px solid black";
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
    }
    return putStuff();

}

putStuff(16);

 /*
 
 
 Black.addEventListener("click", function(){
    for(let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'black';
        //board.insertAdjacentElement('beforeend', square);
        }

    
 }
 )

 */