function main(min, max){
    let data = fetch('https://digicode.cleverapps.io/json/pays/pollution')
        .then(res => res.text())
        .then(JSON.parse)
        .then(x => minMax(x,min,max))
        .then(traitement);

}

function minMax(data,min,max){
    data.pays = data.pays.filter(x => x.valeur >= min && x.valeur <= max);
    return data;
}


function traitement(data){
    console.log(data);
    let titre = document.querySelector("#titre");
    let contenu = document.querySelector("#pays"); 

    titre.innerHTML = "";
    contenu.innerHTML = "";
    
    titre.innerHTML += "Pays les plus polluants pour le "+data.polluant+"("+data.unite+") en "+data.annee; 
    data = data.pays;
    for(let i = 0; i < data.length; i++){
        contenu.innerHTML +=
            "<tr>"+
            "<td><img src='https://flagcdn.com/32x24/"+ data[i].code+".png'></td>"+
            "<td>"+data[i].nom+"</td>"+
            "<td>"+data[i].valeur+"</td>"+
            "<td>"+data[i].pourcentage+"</td>"+
            "</tr>";
    }
}

function alerte1(){
    let msg = document.querySelector("#msg");
    msg.innerHTML += "<div class='alert alert-danger' role='alert'>Min ne peut être supérieur ou égal à Max</div>"
}

function alerte2(){
    let msg = document.querySelector("#msg");
    msg.innerHTML += "<div class='alert alert-danger' role='alert'>Saisir des nombres positifs</div>"
}

function filtrer(){
    let msg = document.querySelector("#msg");
    msg.innerHTML = "";

    let min = document.querySelector("#min").value;
    let max = document.querySelector("#max").value;

    if(min == "") min = 0;
    if(max == "") max = Number.MAX_VALUE;

    if(min >= max) alerte1();
    if(min < 0 || max < 0)  alerte2();
    
    main(min,max);
}