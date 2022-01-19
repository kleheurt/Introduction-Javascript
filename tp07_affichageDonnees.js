function traitement(data){
    let contenu = document.querySelector("#contenu");
    contenu.innerHTML += "<ul>"
    for(let i = 0; i < data.length; i++){
        contenu.innerHTML +=
            "<li>"+
            data[i].name.common+
            " : "+
            data[i].capital+
            "</li>";
    }
    contenu.innerHTML += "</ul>"
}

function main(){
    let data = fetch('https://restcountries.com/v3.1/all')
        .then(res => res.text())
        .then(JSON.parse)
        .then(traitement);

}