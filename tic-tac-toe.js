let square_array = Array(9).fill("#");
let mssg;

window.addEventListener('DOMContentLoaded', (event) => {
    let board = document.getElementById("board");
    const square = board.querySelectorAll("div");
    mssg = document.querySelector("#status");
    square.forEach((i)=>{
        i.className = "square";
    });
    let square_state = true;
    square.forEach((i,index) => {
        i.addEventListener("click", () => {
            if(!(i.getAttribute("class").includes("X") || i.getAttribute("class").includes("O"))){
                if(square_state === true){
                    i.setAttribute("class", "square X");
                    i.textContent = "X";
                    square_state = false;
                    square_array[index] = "X";
                }
                else if(square_state === false){
                    i.setAttribute("class", "square O");
                    i.textContent = "O";
                    square_state = true;
                    square_array[index] = "O";
                }
            }

            winnerWinner(square_array);
        });

        i.addEventListener("mouseover", () => {
            i.classList.add("hover");
        });
        i.addEventListener("mouseleave", () => {
            i.classList.remove("hover");
        });
    });

    document.querySelector("button").addEventListener("click", () => {
        square.forEach((i, index) =>{
            i.textContent = "";
            square_array[index] = "#";
            i.setAttribute("class", "square");
        });
        square_state = true;
        mssg.classList.remove("you-won");
        mssg.textContent = "Move your mouse over a square and click to play an X or an O.";
    });

});

const winnerWinner = (array) => {

    first = [array[0], array[1], array[2]];
    second = [array[3], array[4], array[5]];
    third = [array[6], array[7], array[8]];
    fourth = [array[0], array[3], array[6]];
    fifth = [array[1], array[4], array[7]];
    sixth = [array[2], array[5], array[8]];
    seventh = [array[0], array[4], array[8]];
    eighth = [array[2], array[4], array[6]];

    REcheck = [first, second, third, fourth, fifth, sixth, seventh, eighth]

    REcheck.forEach((arrCheck) => {
        if ((arrCheck[0] === arrCheck[1]) && (arrCheck[1] === arrCheck[2]) && (arrCheck[0] === arrCheck[2]) && (arrCheck[2] !== "#")){
            mssg.setAttribute("class", "you-won");
            mssg.innerHTML = `Congratulations! ${(arrCheck[0])} is the Winner!`;
        }
    });
}
