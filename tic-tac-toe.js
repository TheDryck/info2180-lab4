/*let board = document.body.getElementsByClassName("board");
board.querySelectorAll("div").className = "square";*/
let layout = document.querySelector("link");
let square_array = [];


window.addEventListener('DOMContentLoaded', (event) => {
    //console.log("workingg");
    let board = document.getElementById("board");
    const square = board.querySelectorAll("div");
    square.forEach((i)=>{
        i.className = "square";
    });
    let square_state = true;
    square.forEach((i) => {
        i.addEventListener("click", () => {
            if(!(i.getAttribute("class").includes("X") || i.getAttribute("class").includes("O"))){
                if(square_state === true){
                    i.setAttribute("class", "square X");
                    i.innerHTML = "X";
                    square_state = false;
                }
                else if(square_state === false){
                    i.setAttribute("class", "square O");
                    i.innerHTML = "O";
                    square_state = true
                }
            }
        });
    });

    
});
/* layout.addEventListener("DOMContentLoaded", function(){
    console.log("jsnjdn");
    let board = document.body.getElementById("board");
    board.querySelectorAll("div").className = "square";

}); */