let poid = document.getElementById('poid');
let taille = document.getElementById('taille');
// taille.value
let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    let convPoid = parseInt(poid.value);
    let convTaille = parseInt(taille.value);
    let kg_gramme = convPoid * 1000;
    let auCarre = convTaille ** 2;
    let cm_km = auCarre/10;
    let div = kg_gramme/cm_km
    let arrondir = div.toFixed(1)
    console.log(kg_gramme);  
    console.log(auCarre);  
    console.log(div);  
    console.log(arrondir);  

    let imc = document.getElementById('imc');
    let message = document.getElementById('msg');
    let verification = document.getElementById('verification');
 
    imc.innerHTML = arrondir;
   if (poid.value == '' || taille.value == '') {
    verification.innerHTML = 'Veillez Renseigner votre Champ';
    } 
   
   else{
            if(arrondir >= 18.5 && arrondir <= 24.9 ){
                message.innerHTML = 'Votre IMC indique que vous etes en bonne sante';
                message.style.color ="green"
            }
            else if(arrondir > 24.9 && arrondir <30 ){
                message.innerHTML = 'Votre IMC indique que vous etes en surpoids';
                message.style.color ="yellow"
            }
            else if(arrondir > 30){
                message.innerHTML = 'Votre IMC indique que vous vous situez dans la categorie des personnes obeses';
                message.style.color ="red"
            }
            else{
                
                message.innerHTML = 'Votre IMC indique que vous etes en insuffissance ponderale';
                message.style.color ="red";
            }
   }
   poid.value ='';
   taille.value = '';
})