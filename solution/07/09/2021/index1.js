function affiche(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;

    // recuperation des donnée 



    let y = document.getElementById("affichage");
    // recupération de la cible ^pour l'affichage

    x="nom :  "+nom+ "prenom  :"+prenom + "age :"+age +"";

    y.innerHTML = x;
    // écriture sur la cible
 
}