

 function resultado(){
     let valor1 = parseInt(document.getElementById('valor1').value);
     let valor2 = parseInt(document.getElementById('valor2').value);
     let resultado = document.getElementById('resultado');

     if(valor1 > valor2){       
         resultado.innerHTML=(`O número maior é ${valor1}`)
     }
 }

function resultado2(){
    let numero1 = parseInt(document.getElementById('numero1').value);
    let resultado2 = document.getElementById('resultado2');

    if(numero1 > 0){
        resultado2.innerHTML=(`O número ${numero1} é positivo`)
    }
    if(numero1 < 0){
        resultado2.innerHTML=(`O número ${numero1} é negativo`)
    }
}

function resultado3(){
    let MouF = String(document.getElementById('MouF').value);
    let resultadoM = document.getElementById('resultado3');

    if(MouF == 'm'){
        resultadoM.innerHTML=(`Você digitou ${MouF} em masculino`);
    }  

    else if(MouF == 'f'){
        resultadoM.innerHTML=(`você digitou ${MouF} em feminino`);
}

    else{
        resultadoM.innerHTML=(`Sexo invalido`)
    }
}

function resultado4(){
    let media = parseInt(document.getElementById('media').value);
    let resultadoMedia = document.getElementById('resultado4');
    
    if(media >= 7){
        resultadoMedia.innerHTML=(`Você foi aprovado, sua nota é ${media}`)
    }
    if(media <= 6){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é ${media}`)
    }

}
