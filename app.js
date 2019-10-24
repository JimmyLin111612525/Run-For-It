let ulEl=document.querySelectorAll('ul');
let playerScores=[0,0];
let player1=0;
let player2=1;
let activePlayer=true; //true for player1 is playing;
let maxPoints=200;

let algo = arr =>{
    let arrCopy=arr;
    let num=1;
    let index;
    let points=0;
    let fail=0;
    while(arrCopy.length>0){
        index=arrCopy.findIndex(e=>e===num);

        if(fail>=4){
            return points*5;
        }
        
        if(index===-1 && num<=2){
            return 0;
        }
        else if(index>-1){
            if(num===2){
                points+=2;
            }else if(num>2){
                points++;
            }
            num++;
            arrCopy.splice(index,1);

        }
        else{
            fail++;
        }
    }
    return points*5;
}

let displayDice=arr=>{
    for(let i = 0;i<3;i++){
        let markup=`
        <li>
            <img src="dice-${arr[i]}.png" alt="Dice" class="dice" id="dice-${arr[i]}" style="display: block;">
        </li>    
        `;

        document.querySelector('.list-1').insertAdjacentHTML('afterbegin',markup);
    }

    for(let i=3;i<arr.length;i++){
        let markup=`
        <li>
            <img src="dice-${arr[i]}.png" alt="Dice" class="dice" id="dice-${arr[i]}" style="display: block;">
        </li>    
        `;

        document.querySelector('.list-2').insertAdjacentHTML('afterbegin',markup);
    }




}

let roll = ()=>{
    let arr=[];
    let points;
    ulEl[0].innerHTML='';
        ulEl[1].innerHTML='';

    for(let i = 0;i<6;i++){
        arr.push(Math.ceil(Math.random()*6));
    }
    displayDice(arr);
    console.log(arr);

    points=algo(arr);
    
    
    console.log(points);

    if(activePlayer===true){
        playerScores[player1]+=points;
        document.querySelector('#score-0').textContent=playerScores[player1];
        if(playerScores[player1]>=maxPoints){
            document.querySelector('.btn-roll').disabled=true;
            document.getElementById('name-0').textContent=`you're lucky`;
        }
    }else{
        playerScores[player2]+=points;
        document.querySelector('#score-1').textContent=playerScores[player2];
        if(playerScores[player2]>=maxPoints){
            document.querySelector('.btn-roll').disabled=true;
            document.getElementById('name-1').textContent=`you're lucky`;
        }
    }

    activePlayer=!activePlayer;
    console.log(playerScores);
    console.log(activePlayer);

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

let init = ()=>{
    playerScores=[0,0];
    activePlayer=true;
    maxPoints=200;
    for(let n of ulEl){
        n.innerHTML='';
    }
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-1').textContent='0';


    document.getElementById('name-0').textContent='player 1';
    document.getElementById('name-1').textContent='player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.final-score').value='';
    document.querySelector('.btn-roll').disabled=false;
}

init();

document.querySelector('.btn-new').addEventListener('click',init);
document.querySelector('.btn-roll').addEventListener('click',roll);
document.querySelector('.final-score').onblur=(function(){
    if(document.querySelector('.final-score').value){
        maxPoints=parseFloat(document.querySelector('.final-score').value);
        console.log(document.querySelector('.final-score').value);
    }
});

var x='hello';
    console.log(x);
    var x='bye';
    console.log(x);

/*console.log(algo([1,2,3,4,5,6]));
console.log(algo([1,2,3,3,3,3]));*/