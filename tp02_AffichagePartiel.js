let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let affichage = [];

for(let i = 0 ; i < array.length ; i++){
    let tmp = array[i];
    if(tmp > 3){
        affichage.push(tmp)
    }
}

console.log(...affichage)
affichage = [];

for(let i = 0 ; i < array.length ; i++){
    let tmp = array[i];
    if((tmp % 2) == 0){
        affichage.push(tmp)
    }
}

console.log(...affichage)
affichage = [];

for(let i = 0 ; i < array.length ; i++){
    let tmp = array[i];
    if((tmp % 2) != 0){
        affichage.push(tmp)
    }
}


console.log(...affichage)
