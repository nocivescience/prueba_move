const game=document.getElementById('game');
const ctx=game.getContext('2d');
function squareMove(){
    return {
        x:20,
        y:30,
        w:40,
        h:40,
        xv:5,
        yv:5,
    }
}
function square(){
    ctx.fillStyle='red';
    ctx.fillRect(squareMove().x,squareMove().y,squareMove().w,squareMove().h)
    ctx.fill()
}
setInterval(()=>{
    ctx.clearrect(0,0,game.clientWidth,game.height)
    square()
})
function keyDown(e){
    switch(e.key){
        case 'a':
            squareMove().x+=squareMove().xv;
            break;
        case 'd':
            squareMove().x-=squareMove().xv;
            break;
    }
}