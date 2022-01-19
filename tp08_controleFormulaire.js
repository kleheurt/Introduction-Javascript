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
    if(! estMajeur(new Date(ddn))) {
        msg.innerHTML += "<strong style='color:red;'> Trop jeune </strong>";
    }
}

function estMajeur(ddn){
    let ref = new Date();
    let ans = ref.getFullYear() - ddn.getFullYear();
    let mois = ref.getMonth() - ddn.getMonth();
    if(mois < 0 || (mois == 0) && (ref.getDate() < ddn.getDate())){
        ans -= 1;
        mois *= -1;
    }
    if(ans < 18){
        return false;
    }
    return true;
}