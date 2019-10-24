const arr = [1, 4, 6, 6, 3, 3];
const arr2=[1,2,3,4,5,6];
const arr3=[1, 4, 2, 1, 3, 2];
const arr4=[1,1,1,1,1,1];
const arr5=[6,6,6,6,6,6];
let sequence = arr =>{
    arr=arr.sort((a,b)=>{
        return a-b;
    });
    console.log(arr);
    let playerScore=0;
    let counter=0;
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]+1 === arr[i+1]){
            counter++;
            console.log(arr);
            console.log('yes');
        }
        else if(arr[i]===arr[i+1]){
            console.log(arr[i]);
            if(arr[i]-1===arr[i-1]){
                counter++;
            }
            arr.push(arr[i+1]);
            arr.splice(i+1,1);
            playerScore+=counter;

            counter=0;
            //console.log(playerScore);
            console.log(arr);
            i--;
        }
        
        console.log(arr[i]);
        console.log(`counter:${counter}`);
        console.log(`playerScore:${playerScore}`);
        console.log('------------------');
    }
    playerScore+=counter;
    playerScore++;

    return playerScore*5;
}

let sequence2=arr=>{
    let arrCopy=arr;
    let num=1;
    let index;
    let points=0;
    let fail=0;
    while(arrCopy.length>0){
        console.log(arrCopy);
        index=arrCopy.findIndex(e=>e===num);
        
        if(fail>=6){
            return 0;
        }

        if(index>-1){
            if(num===2){
                points+=2;
            }else if(num>2){
                points++;
            }
            num++;
            arrCopy.splice(index,1);

        }
        else if(index===-1 && num<=2){
            return 0;
        }
        else{
            num=1;
            fail++;
        }
    }
    return points*5;
}

console.log(sequence2(arr5));