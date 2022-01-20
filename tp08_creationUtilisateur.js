
function valider() {
    let data = document.forms["form1"].elements;
    let msg = document.querySelector("#msg");
    document.getElementById("msg").innerHTML = "";
    for (let i = 0; i < 10; i++) {
        if (data[i].value == "") {
            msg.innerHTML += "<strong style='color:red;'> Veuillez renseigner tous les champs. </strong><br/>";
            break;
        }
    }
    ddn = data[2].value;
    if (!estMajeur(new Date(ddn))) {
        msg.innerHTML += "<strong style='color:red;'> Trop jeune </strong>";
    }

    let objet = [].slice
        .call(data)
        .filter(x => x.name != "")
        .map(x => '"' + x.name + '":"' + x.value + '"')
        .join(",");
    objet = JSON.parse("{" + objet + "}");
    objet.identiteCreateur = null;

    console.log(objet);

    fetch('https://digicode.cleverapps.io/utilisateurs',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(objet)
        }
    ).then(response => response.text().then(text => console.log(text)));
}

function estMajeur(ddn) {
    let ref = new Date();
    let ans = ref.getFullYear() - ddn.getFullYear();
    let mois = ref.getMonth() - ddn.getMonth();
    if (mois < 0 || (mois == 0) && (ref.getDate() < ddn.getDate())) {
        ans -= 1;
        mois *= -1;
    }
    if (ans < 18) {
        return false;
    }
    return true;
}