const societe = {
    "Nom": "Google",
    "Siege_social": "Googleplex, Mountain View, California, United States",
    "Fondateurs": [{
        "nom": "Larry Page",
        "ddn": "26-03-1973",
        "ldn": "East Lansing, Michigan"
    },
    {
        "nom":"Sergey Brin",
        "ddn":"21-08-1973",
        "ldn":"Moscou, URSS"
    }],
    "CA":[{
        "annee":"2008",
        "valeur":"16.49"
    },
    {
        "annee":"2012",
        "valeur":"37.97"
    },
    {
        "annee":"2016",
        "valeur":"89.46"
    },
    {
        "annee":"2018",
        "valeur":"136.2"
    }]
}


let fondateurs = societe.Fondateurs;
let ca = societe.CA;

fondateurs = fondateurs.map(x => x.nom);
ca = ca.map(x => x.annee+" : "+x.valeur+" Mds $ | ");

console.log(...fondateurs);
console.log(...ca);