
  







  
// // funçao pra validar login e senha com javascript //
//     function validar(){
//         let usuario = document.getElementById ('usuario').value;
//         let senha = document.getElementById('senha').value;  //Usa MD5 pra pegar a senha//
//         if(usuario === 'user01' && senha === '123teste56' || usuario === 'user02' && senha === '56teste123'){
//             // alert(`Seja bem vindo ${usuario}`);
//             window.location.href = 'https://www.google.com'
//         }else{
//             alert(`Dados invalidos`);
//         }

//         console.log(usuario, senha);

//     }

    
    // senha.addEventListener('keyup', function(event){
    // if(event.keyCode === 13){
    //     event.preventDefault();
    //     getElementById ('login').click();
    // } 
    // });




















// function calcular (){
//     let temperatura = document.getElementById('temperatura').value;  
//     let resultado = document.getElementById('resultado');
//     let calculo = (temperatura * 1.8) + 32;

//     resultado.innerHTML =` A temperatura é ${calculo} `;
// };



// // Definir variavel caixa //
// let caixa = document.getElementById('caixa');
// // Adicionar eventos com mouse na variavel caixa //
// caixa.addEventListener('click', clicar);
// caixa.addEventListener('mouseenter', entrar);
// caixa.addEventListener('mouseout', sair);

// // Criar funçao da variavel clicar // innerHtml o = sobreescreve e += adiciona o texto ao lado //
// function clicar (){
//     caixa.innerHTML = 'voce clicou';
//     caixa.style.background = 'red';
//     caixa.style.color = 'white';
// }

// // Criar funçao da variavel entrar (Ativa quando o mouse passar dentro da Div) //
// function entrar (){
//     caixa.innerHTML = 'Voce Entrou';
//     caixa.style.background = 'yellow';
//     caixa.style.color = 'black';
// }

// // Criar funçao da variavel sair (Ativa quando tirar o mouse de dentro da Div) //
// function sair (){
//     caixa.innerHTML = 'Passe o mouse';
//     caixa.style.background = 'green';
//     caixa.style.color = 'white';
//     caixa.style.fontWeight = '900';
// }

// // Pegar a data do computador //
// let agora = new Date();
// // Pegar dia da semana em valores numericos //
// let diaSemana = agora.getDay();
// // Pegar o Id da Div //
// let data = document.getElementById('data');

// // switch(diaSemana){
// //     case 0:
// //         console.log('Domingo');
// //         data.innerHTML = 'Domingo';
// //         data.style.background = ' gray';
// //     break;
// //     case 1:
// //         console.log('Segunda');
// //         data.innerHTML = 'Segunda';
// //         data.style.background = ' yellow';
// //     break;
// //     case 2:
// //         console.log('Terça');
// //         data.innerHTML = 'Terça';
// //         data.style.background = ' red';
// //     break;
// //     case 3:
// //         console.log('Quarta');
// //         data.innerHTML = 'Quarta';
// //         data.style.background = ' blue';
// //     break;
// //     case 4:
// //         console.log('Quinta');
// //         data.innerHTML = 'Quinta';
// //         data.style.background = ' pink';
// //     break;
// //     case 5:
// //         console.log('Sexta');
// //         data.innerHTML = 'Sexta';
// //         data.style.background = ' gold';
// //     break;
// //     case 6:
// //         console.log('Sabado');
// //         data.innerHTML = 'Sabado';
// //         data.style.background = ' darkblue';
// //     break;
// //     default:
// //         console.log('Dia invalido');
// //     break;
// // }

// if(diaSemana == 0){
//     data.innerHTML = ('Domingo');
//     data.style.background = ('black');
// } else if(diaSemana == 1){
//     data.innerHTML = ('Segunda');
//     data.style.background = ('blue');
// } else if(diaSemana == 2){
//     data.innerHTML = ('Terça');
//     data.style.background = ('red');
// } else if(diaSemana == 3){
//     data.innerHTML = ('Quarta');
//     data.style.background = ('yellow');
// } else if(diaSemana == 4){
//     data.innerHTML = ('Quinta');
//     data.style.background = ('gray');
// } else if(diaSemana == 5){
//     data.innerHTML = ('Sexta');
//     data.style.background = ('green');
// } else if(diaSemana == 6){
//     data.innerHTML = ('Sabado');
//     data.style.background = ('gold');
// } else{
//     data.innerHTML = ('Data invalida');
//     data.style.background = ('white');
//     data.style.color = ('black');
// }

// //

// let numero = document.getElementById('contador');
// let contador = 0;

// while(contador < 300){
//     contador ++;
//     console.log(contador);
//     numero.innerHTML = (contador);
// }
















