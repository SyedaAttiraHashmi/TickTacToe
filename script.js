document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#reset");
    let newGameBtn = document.querySelector("#new-btn");
    let msgContainer = document.querySelector(".msgcontainer");
    let msg = document.querySelector("#msg");


let turnO = true;// playerX, PlayerO     //true hai to O ayga and false hai to X ayga

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () =>{
    turnO = true;
    enablebox();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#553C5D";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#9F2E41";
            turnO = true
        }
        box.disabled = true;

        checkWinner()
    });
});
const disablebox =() =>{
    for (let box of boxes){
        box.disabled = true;
    }

}
const enablebox =() =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.style.color = "#2B9718";
    msgContainer.classList.remove("hide");
    disablebox();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }


    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

})
