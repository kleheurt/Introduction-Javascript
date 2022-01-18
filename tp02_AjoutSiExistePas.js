const a1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let a2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

for(let i = 0; i < a1.length ; i++){
    let tmp = a1[i];
    if(! (a2.includes(tmp))){
        a2.push(tmp);
    }
}

console.log(...a2);