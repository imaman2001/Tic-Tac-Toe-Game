
let resetBtn = document.querySelector('#reset-btn');
let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.msg-container');
let newgameBtn = document.querySelector('#newgame-btn');
let msg = document.querySelector('#msg');

let turnO = true; //playerO , playerX

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
     if(turnO){    //player O
        box.innerText = "O";
        turnO = false;         // don't write the "O" again in next box
     }
     else{         //player X
        box.innerText = "X";
        turnO = true;
     }
     box.disabled = true; //not put the value again in box , after one time use box will not be change
    
     checkWinner();

     
    });
});

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");

};

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations , winner is ${winner} .`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
     for (let pattern of winPatterns){

            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }   
            }
     }
};

newgameBtn.addEventListener("click" , resetgame);
resetBtn.addEventListener("click" , resetgame);