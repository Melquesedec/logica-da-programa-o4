

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
    
    if(media == 7){
        resultadoMedia.innerHTML=(`Você foi aprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 6){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 10){
        resultadoMedia.innerHTML=(`Você foi aprovado com <strong>DISTINÇÃO!</strong>, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 5){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 4){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 3){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 2){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 1){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 0){
        resultadoMedia.innerHTML=(`Você foi reprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 8){
        resultadoMedia.innerHTML=(`Você foi aprovado, sua nota é <strong>${media}!</strong>`)
    }
    else if(media == 9){
        resultadoMedia.innerHTML=(`Você foi aprovado, sua nota é <strong>${media}!</strong>`)
    }
    }

    function resultado5(){
        let cons = String(document.getElementById('cons').value);
        let resultado5 = document.getElementById('resultado5');
        
        if(cons == 'b' || cons == 'c' ||cons == 'd' ||cons == 'f' ||cons == 'g' ||cons == 'j' ||cons == 'k' ||cons == 'l' ||cons == 'm'
         ||cons == 'n' ||cons == 'p' ||cons == 'q' ||cons == 'r' ||cons == 's' ||cons == 't' ||cons == 'v' ||cons == 'w' || cons == 'x' 
         || cons == 'z'){
            resultado5.innerHTML=(`Você digitou uma consoante`);
        }else{
            resultado5.innerHTML=(`Você digitou uma vogal`)
    } 
}

    function resultado6(){
        let maior = parseInt(document.getElementById('maior').value);
        let menor = parseInt(document.getElementById('menor').value);
        let meio = parseInt(document.getElementById('meio').value);
        let resultado6 = document.getElementById('resultado6');

        if( maior > menor && maior < meio){       
            resultado6.innerHTML=(`Maior número é ${maior}`)
        }
        else if( menor > maior && menor < meio){       
            resultado6.innerHTML=(`Maior número é ${menor}`)
        }
        else if( meio > menor && meio < maior){       
            resultado6.innerHTML=(`Maior número é ${meio}`)
        }
        if( meio > maior && meio < menor){       
            resultado6.innerHTML=(`Menor número é ${meio}`)
        }
        else if( menor > meio && menor < maior){       
            resultado6.innerHTML=(`Menor número é ${menor}`)
        }
        else if( maior > meio && maior < menor){       
            resultado6.innerHTML=(`Menor número é ${maior}`)
        }

}

function resultado7(){
    let selecionahorario = document.getElementById('selecionahorario').value;
    let resultado7 = document.getElementById('resultado7');

        if(selecionahorario <= 0){
        resultado7.innerHTML=(`Bom dia!`)
        }
        else if(selecionahorario = 1){       
        resultado7.innerHTML=(`Boa Tarde!`)
        }
        else if(selecionahorario == 2){       
            resultado7.innerHTML=(`Boa noite!`)
        }
} 

function resultado8(){
    let AlimentoP = document.getElementById('AlimentoP').value;
    let resultado8 = document.getElementById('resultado8');

        if(AlimentoP == 0){
        resultado8.innerHTML=(`Este produto é o mais econômico.`)
        }
        else if(AlimentoP == 1){       
        resultado8.innerHTML=(`Este produto está na media.`)
        }
        else if(AlimentoP == 2){       
            resultado8.innerHTML=(`Este produto está acima da media.`)
        }
    }

        function resultado9(){
            let nota1 = parseFloat(document.getElementById("nota1").value);
            let nota2 = parseFloat(document.getElementById("nota2").value);
            let nota = (nota1 + nota2) / 2
            let resultado9 = document.getElementById('resultado9');
            
            if(nota == 10 || nota >= 9){
                resultado9.innerHTML=(`Você recebeu um A`)
            }
            else if(nota == 7.5 || nota == 8.9){
                resultado9.innerHTML=(`Você recebeu um B`)
            }
            else if(nota == 6 || nota == 7.4){
                resultado9.innerHTML=(`Você recebeu um C`)
            }
            else if(nota == 4 || nota == 5.9){
                resultado9.innerHTML=(`Você recebeu um D`)
            }
            else if(nota == 3.9 || nota == 0){
                resultado9.innerHTML=(`Você recebeu um E`)
            }
}

