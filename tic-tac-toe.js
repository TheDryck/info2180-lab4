/*let board = document.body.getElementsByClassName("board");
board.querySelectorAll("div").className = "square";*/
let layout = document.querySelector("link");



window.addEventListener('DOMContentLoaded', (event) => {
    console.log("workingg");
    let board = document.getElementById("board");
    const a = board.querySelectorAll("div");
    a.forEach((i)=>{
        i.className = "square";
    })
});
/* layout.addEventListener("DOMContentLoaded", function(){
    console.log("jsnjdn");
    let board = document.body.getElementById("board");
    board.querySelectorAll("div").className = "square";

}); */