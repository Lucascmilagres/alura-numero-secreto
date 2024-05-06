let listaNumEscolhidos = [];
let numMax = 100;
let numMin = 1;
let tentativas = 0;
numSecreto = gerarNumAleatorio(numMin, numMax);
textoPadrao();

function verificarChute(){
    tentativas++;
    let chute = document.querySelector('input').value;
    if( chute == numSecreto){
        exibirTexto("h1", "Parabéns, você descrobriu!");
        exibirTexto("p", `Você descobriu o número secreto com ${tentativas} tentativas`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        exibirTexto("h1", "Bah, tente novamente!");
        if (chute > numSecreto){
            exibirTexto("p", `O número secreto é menor que ${chute}`);
        }
        else {
            exibirTexto("p", `O número secreto é maior que ${chute}`);
        }
        limparCampo();
    }
};  

function novoJogo(){
    tentativas = 0;
    numSecreto = gerarNumAleatorio(numMin, numMax);
    limparCampo();
    textoPadrao();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(listaNumEscolhidos);
};

function exibirTexto(tag, text){
    document.querySelector(tag).innerText = text;
};

function textoPadrao(){
    exibirTexto('h1', 'Jogo do número secreto');   
    exibirTexto('p', `Escolha um número entre ${numMin} e ${numMax}`);  
};

function gerarNumAleatorio(numMin, numMax){
    //Math.floor - Função que permite arredondar valores para o menor número inteiro mais próximo.
    //Math.random() * (max - min + 1)) + min -> calculo para gerar um número aleatório dentro de um determinado intervalo
    let numEscolhido = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    /*função para fazer com que os numeros gerados não se repitam
    if (listaNumEscolhidos.length >= numMax){
        listaNumEscolhidos = [];
    }
    //.includes -> verifica se uma string contém outra string ou se um array contém um determinado elemento.
    if(listaNumEscolhidos.includes(numEscolhido)){
        return gerarNumAleatorio(numMin, numMax);
    }
    else{
        //.push() adiciona um ou mais item ao final de um array 
        listaNumEscolhidos.push(numEscolhido);
        return numEscolhido;
    }*/
};

function limparCampo(){
    let campoChute = document.querySelector('input');
    campoChute.value = null;
};