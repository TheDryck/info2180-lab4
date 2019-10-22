/*let board = document.body.getElementsByClassName("board");
board.querySelectorAll("div").className = "square";*/
//let layout = document.querySelector("link");
let square_array = Array(9).fill("#");
let message;

window.addEventListener('DOMContentLoaded', (event) => {
    //console.log("workingg");
    let board = document.getElementById("board");
    const square = board.querySelectorAll("div");
    square.forEach((i)=>{
        i.className = "square";
    });
    let square_state = true;
    square.forEach((i,index) => {
        i.addEventListener("click", () => {
            if(!(i.getAttribute("class").includes("X") || i.getAttribute("class").includes("O"))){
                if(square_state === true){
                    i.setAttribute("class", "square X");
                    array[i] = "X";
                    square_state = false;
                    square_array[index] = "X";
                }
                else if(square_state === false){
                    i.setAttribute("class", "square O");
                    array[i] = "O";
                    square_state = true;
                    square_array[index] = "O";
                }
            }

            winnerWinner(square_array, message);
        });

        i.addEventListener("mouseover", () => {
            i.classList.add("hover");
        });
        i.addEventListener("mouseleave", () => {
            i.classList.remove("hover");
        });
    });

    
});

const winnerWinner = (array, mssg) => {
    if(array[0] === array[1] && array[1] === array[2] && array[0] === array[2] && array[2] !== "#"){
        displayMssg(mssg, array[0]);
    }
    else if( array[3] === array[4] && array[4] === array[5] && array[3] == array[5] && array[5] !== "#"){
        displayMssg(mssg, array[3]);
    }
    else if( array[6] === array[7] && array[7] === array[8] && array[6] === array[8] && array[8] !== "#"){
        displayMssg(mssg, array[6]);
    }
    else if( array[0] === array[3] && array[3] === array[6] && array[0] === array[6] && array[6] !== "#"){
        displayMssg(mssg, array[0]);
    }
    else if( array[1] === array[4] && array[4] === array[7] && && array[1] === array[7] && array[7] !== "#"){
        displayMssg(mssg, array[1]);
    }
    else if( array[2] === array[5] && array[5] === array[8] && array[8] === array[2] && array[8] !== "#"){
        displayMssg(mssg, array[2]);
    }
    else if( array[0] === array[4] && array[4] === array[8] && array[0] === array[8] && array[8] !== "#"){
        displayMssg(mssg, array[0]);
    }
    else if( array[2] === array[4] && array[4] === array[6] && array[2] === array[6] && array[6] !== "#"){
        displayMssg(mssg, array[2]);
    }
};

const displayMssg = (msg, player){
    msg.setAttribute("class", "you-won");
    msg.innerHTML = `Congrats!! ${player} is the winner!`; 
};
/* layout.addEventListener("DOMContentLoaded", function(){
    console.log("jsnjdn");
    let board = document.body.getElementById("board");
    board.querySelectorAll("div").className = "square";

}); */