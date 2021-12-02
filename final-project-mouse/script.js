const move=document.getElementById('move');

var moveLeft = 0;

function direction(e){
    if(e.keyCode==39){
        moveLeft +=2;
        move.style.left = moveLeft + 'px';
        if(moveLeft>=600){
            moveLeft -=2;
        }
    }
    if(e.keyCode==37){
        moveLeft -=2;
        move.style.left = moveLeft + 'px';

    }
    if(e.keyCode==38){
        moveLeft -=2;
        move.style.top = moveLeft + 'px';
        if(moveLeft>=600){
            moveLeft +=2;
        }
    }
    if(e.keyCode==40){
        moveLeft +=2;
        move.style.top = moveLeft + 'px';
    }
}

document.onkeydown = direction;
