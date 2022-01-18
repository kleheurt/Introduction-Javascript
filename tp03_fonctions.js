function fonctionConstante(){
    return 33;
}

// console.log(fonctionConstante());

function bonjourUntel(nom){
    if(! nom){
        throw "Vous devez fournir un nom !";
    }
    return "Bonjour "+nom;
}

// console.log(bonjourUntel("Marcel"));
// console.log(bonjourUntel());

function calcul(a,b){
    if(typeof a != 'number' || typeof b != 'number'){
        throw "Pas un nombre"
    }
    return a * b + a + b;
}

// console.log(calcul(2,5))
// console.log(calcul("2","5"));

function controleTableau(array){
    return (array.length > 0) && array.every(x => ((typeof x) == 'number'));
}

// console.log(controleTableau([1,2,3,4]));
// > true
// console.log(controleTableau([]));
// > false
// console.log(controleTableau([1,2,3,"48"]));
// > false

function moyenne(array){
    if(array.length <= 0){
        return 0;
    }
    if(! controleTableau(array)){
        throw "Tableau invalide";
    }
    return array.reduce((a,b) => a+b) / array.length;
}

// console.log(moyenne([1,2,3,4]));
//  > 2.5
// console.log(moyenne([]));
//  > 0
// console.log(moyenne([1,2,3,"48"]));
// > Tableau invalide