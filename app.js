let boxes=document.querySelectorAll(".btn")
let resetBtn=document.querySelector(".reset")
let congrats=document.querySelector("p")


let WinPattern=[[0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]
            ];
let turn0=true;
let count=0;

boxes.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turn0)
        {
            btn.innerHTML="X";
            turn0=false;
        }
        else
        {
            btn.innerHTML="O";
            turn0=true;
        }
        btn.disabled=true;
        count++;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of WinPattern)
    {
        let pos0=boxes[pattern[0]].innerHTML;
        let pos1=boxes[pattern[1]].innerHTML;
        let pos2=boxes[pattern[2]].innerHTML;
        if(pos0!="" && pos1!="" && pos2!="")
        {
            if(pos0===pos1 && pos1===pos2){
                console.log(pos1+" Winner");
                disableBtn();
                winNote(pos1);
                return
            }
        }
    }
    if(count===9){
        console.log("draw");
        drawNote();
    }
};

const winNote=(x)=>{
    congrats.innerHTML=`Congratulations to the Winner ${x}`;
    congrats.classList.remove("hide");

    confetti({
        particleCount: 200,   // Number of particles
        spread: 70,           // Spread area
        origin: { y: 0.6 }    // Start from middle of screen
    });
};

const drawNote=()=>{
    congrats.innerHTML="DRAW!  Restart again!!";
    congrats.classList.remove("hide");
};

const disableBtn=()=>{
    boxes.forEach((btn)=>{
    btn.disabled=true;
});
};

const enableBtn=()=>{
    boxes.forEach((btn)=>{
        btn.innerHTML="";
        btn.disabled=false;
    });
};

resetBtn.addEventListener("click",()=>{
    turn0=true;
    enableBtn();
    congrats.classList.add("hide");
});