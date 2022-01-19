function main(){
    let data = fetch('https://digicode.cleverapps.io/json/pays/pollution')
        .then(res => res.text())
        .then(JSON.parse)
        .then(traitement);

}

function traitement(data){
    console.log(data);
    let titre = document.querySelector("#titre");
    let contenu = document.querySelector("#pays"); 
    
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