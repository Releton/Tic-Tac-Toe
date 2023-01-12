import { disableButtons, sol, heading, askToPlay } from "./index.js";
export function checkRow(row, player){
    row -= 1;
    for(let i = 0+row*3; i < 3+row*3; i++){
        if(sol[i] != player){
            return false;
        }
    }
    return true;
}

export function checkAllRows(){
    
    if(checkRow(1,1)){
        heading.innerHTML = "Player X won!"
        return true;
    }
    if(checkRow(1,2)){
        heading.innerHTML = "Player O won!"
        return true;
    }
    if(checkRow(2,1)){
        heading.innerHTML = "Player X won!"
        return true;
    }
    if(checkRow(2,2)){
        heading.innerHTML = "Player O won!"
        return true;
    }
    if(checkRow(3,1)){
        heading.innerHTML = "Player X won!"
        return true;
    }
    if(checkRow(3,2)){
        heading.innerHTML = "Player O won!"
        return true;
    }
}
export function checkColumn(col, player){
    col -= 1;
    for(let i = col; i <= col+6; i += 3){
        if(sol[i] != player){
            return false;
        }
    }
    return true;
}
export function checkAllColumn(){
    if(checkColumn(1,1)){
        heading.innerHTML = "Player X won!"
        return true;
    }
    if(checkColumn(1,2)){
        heading.innerHTML = "Player O won!"
        return true;
    }
    if(checkColumn(2,1)){
        heading.innerHTML = "Player X won!"
        return true;
    }
    if(checkColumn(2,2)){
        heading.innerHTML = "Player O won!"
        return true;
    }
    if(checkColumn(3,1)){
        heading.innerHTML = "Player X won!"
        return true;
    }
    if(checkColumn(3,2)){
        heading.innerHTML = "Player O won!"
        return true;
    }
}

export function checkDiagonal(player){
    if(sol[0] === sol[4] && sol[4] === sol[8] && sol[8] === player){
        return true;
    }
    if(sol[2] === sol[4] && sol[4] === sol[6] && sol[6]=== player){
        return true;
    }
}


export function checkWin(){
    if(checkAllRows()){
        disableButtons()
        return true;
        
    }
    if(checkAllColumn()){
        disableButtons()
        return true;
        
    }
    if(checkDiagonal(1)){
        disableButtons();
        heading.innerHTML = "Player X won!"
        return true;
        
    }
    if(checkDiagonal(2)){
        disableButtons();
        heading.innerHTML = "Player O won!"
        return true;
        
    }
}
