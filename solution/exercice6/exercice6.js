function pat(){
    let n = document.getElementById("nom").value
   let  p = document.getElementById('prenom').value
   if(n < 0 && p <0){
    x = '<p>Positif </p>'  
   }
    else if (n < 0 || p <0){
        x = '<p>Negatif </p>'  
    }
    else{
        x = '<p>Positif </p>'  
    }

     document.body.innerHTML = x
     console.log(x)
 
 } 