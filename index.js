let turn="X"
document.querySelector('.info h1').innerHTML= " Turn For "+" "+turn;

let gameover=false
const  chabgeturn=()=>{
    return turn ==="X"?"0":"X"      
} 
// function to check win//
const checkWin=()=>{
  let boxtest=  document.getElementsByClassName("boxtest");
    let wins=[
        [0,1,2,15,-4,90],
        [3,4,5,15,4,90],
        [6,7,8,15,9,90],
        [0,3,6,17,20,0],
        [1,4,7,54,20,0],
        [2,5,8,91,20,0],
        [0,4,8,53,19,-47],
        [2,4,6,56,18,45]
    ]
    wins.forEach(e=>{
        if((boxtest[e[0]].innerText===boxtest[e[1]].innerText) && 
        (boxtest[e[1]].innerText===boxtest[e[2]].innerText) &&
        (boxtest[e[0]].innerText!=='') ){
            document.querySelector('.info h1').innerHTML=boxtest[e[0]].innerText+"  "+"  Won The Match";
            document.querySelector('.line').style=`transform: translate(${e[3]}vh,${e[4]}vh) rotate(${e[5]}deg); display: block;`
            gameover=true;

        }
    })

}
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
    let boxtest=e.querySelector('.boxtest')
    e.addEventListener('click',()=>{
        if(boxtest.innerText === "" && gameover!==true ){ 
            boxtest.innerText =turn;
            turn= chabgeturn();
            checkWin();
        }
        if(!gameover){
            document.querySelector('.info h1').innerHTML= " Turn For "+" "+turn;

        }
    })
})