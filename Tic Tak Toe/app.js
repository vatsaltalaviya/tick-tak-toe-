let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let msgcon = document.querySelector(".msg");
let msg = document.querySelector("#msg-con");
let turn = true;
var clicks = 0;
const winratio = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
console.log("hello js");


// to select buttons and add event 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked")
        if (turn) {
            turn = false;
            box.innerText = "x";
            // clicks++;
        }
        else {
            turn = true;
            box.innerText = "O";
            // clicks++;
        }
        box.disabled = true;
        clicks++
        checkwinner();
        console.log(clicks);
    });
    
});
// to reset the game 
const resetGame = () => {
    turn = true;
    enablebtn();
    clicks = 0;
    msgcon.classList.add("hide");
}

// to diseble button when any one player win the game 
const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
// to enable button when player click reset or new button 
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// to show the winning message 
const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is : player ${winner}`;
    msgcon.classList.remove("hide");

}

// to check winner
const checkwinner = () => {
    for (let patterns of winratio) {
        // console.log(patterns[0], patterns[1], patterns[2])
        // console.log(boxes[patterns[0]].innerText, 
        //     boxes[patterns[1]].innerText, 
        //     boxes[patterns[2]].innerText)
        let pos0 = boxes[patterns[0]].innerText;
        let pos1 = boxes[patterns[1]].innerText;
        let pos2 = boxes[patterns[2]].innerText;

        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos0 == pos1 && pos1 == pos2) {
                showwinner(pos0);
                disablebtn();
            }
           
            if((pos0!=pos1&&pos1!=pos2)&&clicks==9){
                msg.innerText = `game tie`;
    msgcon.classList.remove("hide");
            }
        }

    }
}
reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);