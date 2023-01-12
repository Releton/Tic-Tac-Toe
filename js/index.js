import { checkWin } from "./logic.js";
let count = 1;

let buttons = document.querySelectorAll(".button");
export const heading = document.querySelector(".head-text")
export let sol = [0,0,0,0,0,0,0,0,0]

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function (){
        if(count %2!==0){
            this.classList.add('x-mark');
            sol[Number.parseInt(this.classList[1])-1] = 1;
        }
        else{
            this.classList.add('o-mark');
            sol[Number.parseInt(this.classList[1])-1] = 2;

        }
        count++;
        this.disabled = true;
        if(checkWin()){
            setTimeout(()=>{
                askToPlay();
            },3000)
        }
    })
}
export function disableButtons(){

    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
}

export function askToPlay(){
    if(confirm("Press Ok to play again!")){
        location.reload();
    }
}