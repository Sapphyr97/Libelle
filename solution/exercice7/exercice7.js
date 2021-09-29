function pat(){
    let n = document.getElementById("nom").value



    if(n == 6 || n ==7){
        x = '<p> Poussin</p>'
    } 
    else if(n == 8 || n ==9){
        x = '<p> Pupile</p>'
    } 
    else if(n == 10 || n ==11){
        x = '<p> Minime</p>'
    }
    else{
        x = '<p> Cadet</p>'
    }
    document.body.innerHTML = x
 } 