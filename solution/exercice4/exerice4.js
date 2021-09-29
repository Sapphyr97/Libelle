function pat(){
    let n = document.getElementById("nom").value
    p = n * 0.13
    // calcul de l'impot , la valeur multiplié par 0.13 qui est le taux
     x = '<p> impot : '+p+'</p>'
     document.body.innerHTML = x
     console.log(x)
 
 } 