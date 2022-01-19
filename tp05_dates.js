function plusGrandDate(d1, d2){
    let res = new Date();
    (d1 > d2) ? res = d1 : res = d2;
    return res;
}

let date1 = new Date(2022, 0, 1);
let date2 = new Date(2000, 13, 31);
console.log(plusGrandDate(date1,date2).toDateString());

function calculerAge(ddn){
    let ref = new Date();
    let ans = ref.getFullYear() - ddn.getFullYear();
    let mois = ref.getMonth() - ddn.getMonth();
    if(mois < 0 || (mois == 0) && (ref.getDate() < ddn.getDate())){
        ans -= 1;
        mois *= -1;
    }
    return "Vous avez "+ans+" ans et "+mois+" mois.";
}

let ddn = new Date(1994,6,7);
console.log(calculerAge(ddn));