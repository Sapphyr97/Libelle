function cheking(){

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;


    console.log( nom + " " +prenom + " "+age)
    
switch (true) {
    case (age >= 76 && age <= 120):
        console.log("vous êtes vieux");
       
        let x = document.createElement("li")
        
        x.innerText =` ${nom} ${prenom}`

        
        let tdVieux = document.getElementById("vieuxWaiting")
        tdVieux.appendChild(x)

        break;
    case (age >= 25 && age <= 75) :
       let y = document.createElement("P")
        y.innerText = ` ${nom} ${prenom}`
        
        let tdJeune = document.getElementById("jeuneWaiting")
        tdJeune.appendChild(y)

        break;
    case ( age > 7 && age <= 24):        

       let o = document.createElement("P")
        o.innerText = ` ${nom} ${prenom}`
        
        let tresJeune = document.getElementById("tresjeuneWaiting")
        tresJeune.appendChild(o)
    default:
        alert(" vous êtes hors categorie")
        break;
}



}