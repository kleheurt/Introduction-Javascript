function afficher(){
    let meteo = document.querySelector("#meteo");

    let data = fetch('https://api.openweathermap.org/data/2.5/weather?q=Naples&lang=fr&units=metric&appid=e7600d82a734460a8fc05666f3f03c12')
        .then(res => res.text())
        .then(JSON.parse)
        .then(traitement)
        .then(d => meteo.innerHTML += d);

}

function traitement(data){
    console.log(data);

    let heur = new Date(data.dt * 1000);
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    let pres = data.main.pressure;
    let vite = data.wind.speed;
    let dire = data.wind.deg;

    return "<h1> Météo de Naples"+
        "<img src='https://openweathermap.org/img/w/"+icon+".png'></h1>"+
        "<h2>"+heur+"</h2>"+
        "<ul>"+
        "<li> Température : "+temp+"°C </li>"+
        "<li> Temps : "+desc+"</li>"+ 
        "<li> Pression : "+pres+"HPa</li>"+ 
        "<li> Vent du "+dire+"° à "+vite+"m/s</li>"+ 
        "</ul>";

}