function envoyer() {

    let nombre = document.getElementById("somme").value
    //initialisation  d'une variable pour la récuperation de la valeur qui se trouve dans l'input
    let i = 0
    //initialisation de i à 0
    let b = []
        //initialisation de de notre tableau b
    let d
    // iniatialisation de la variable intermediaire
    while (i < nombre) {
        i++;
        // i ++ permetre d'incrémenter  à chaque tour de boucle
        let a = b.push(i)
        // push permet d'envoyer chaque itération dans le tablea b
        console.log(a)
        let somme = b.reduce((a, b) => a + b, 0)
        //la méthode reduce permet de faire le calcul de tous les nomnbres
        d = somme;
        //passage du resultat du calcul à la variable intermédiaire
    }
    console.log(d)
    document.getElementById("tat").innerHTML = ` la somme des entier jusqu'au nombre ${nombre} est  de ${d}`
    //affichage de cette variable intermédiaire
}