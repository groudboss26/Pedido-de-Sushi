let carrinho ={}

function add(protudoId,protudoNome){

let valor = parseInt(document.getElementById(protudoId).value)

if(isNaN(valor) || valor <= 0 ){
    document.getElementById(protudoId).value =''
    return
}

if(!carrinho[protudoNome]){
    carrinho[protudoNome] = 0
}

carrinho[protudoNome] += valor

mensagem(protudoNome,carrinho[protudoNome],'add')

document.getElementById(protudoId).value =''

}

function excluir(protudoId,protudoNome){

    let valor = parseInt(document.getElementById(protudoId).value)

    if(isNaN(valor) || valor <= 0 ){
    document.getElementById(protudoId).value =''
    return
}

    
    carrinho[protudoNome] -= valor

    if(carrinho[protudoNome] < 0){
        carrinho[protudoNome] = 0

    }
    mensagem(protudoNome,carrinho[protudoNome],'excluir')

    document.getElementById(protudoId).value =''
}


function mensagem(protudoNome,valorTotal,tipo){

    let elementoPai = document.getElementById('father')
    let idMensagem = `msg-${protudoNome.replace(/\s+/g,'')}`

    let novoElemento = document.createElement('div')
    novoElemento.id =idMensagem
    
    let excluirElemento = document.getElementById(idMensagem)
    
    let excluirFinalizador = document.getElementById('finalizar')
    
    if(excluirElemento){
        excluirElemento.remove();
    }else if(excluirFinalizador){
        excluirFinalizador.remove()
        
    }
    
    if(tipo === 'add'){
        novoElemento.innerHTML = `Você acabou de adicionar ${valorTotal} unidades do ${protudoNome}`
    }else if(tipo === 'excluir' && valorTotal === 0){
        novoElemento.innerHTML = `Você acabou de excluir. Agora restam ${valorTotal} unidades do ${protudoNome}`
        setTimeout(() =>{
            novoElemento.remove()
        },2000)
        
        
    }else if(tipo === 'excluir' && valorTotal > 0){
        novoElemento.innerHTML = `Você acabou de excluir. Agora restam ${valorTotal} unidades do ${protudoNome}`
    }




    elementoPai.appendChild(novoElemento)

}


function reiniciar(){
    // limpa o carrinho
    carrinho = {};
    
    //remove resumo final
    let resumoFinal = document.getElementById('finalizar')
    if(resumoFinal){
        resumoFinal.remove()
    }
    // limpa os inputs
    let inputs = document.querySelectorAll('input[type="number"]')
    inputs.forEach(input => input.value = '')

    // opcional: mensagem de aviso
    let mensagemGlobal = document.getElementById('mensagemGlobal')
    if(mensagemGlobal) {
        mensagemGlobal.innerHTML = `O carrinho foi reiniciado! Você pode começar um novo pedido.`
        setTimeout(() => mensagemGlobal.innerHTML = '', 2000)
    }
}

// troca de pagina

let conteudoInicial = "";

document.addEventListener("DOMContentLoaded", function () {
    // pega o HTML inicial do conteudoPrincipal
    conteudoInicial = document.getElementById("conteudoPrincipal").innerHTML;
    
});



function carregamentoPagina(pagina){

     if (pagina === "index") {
        // volta para o conteúdo inicial
        document.getElementById("conteudoPrincipal").innerHTML = conteudoInicial;
        return;
    }
    
        fetch(pagina)
        .then(response => response.text())
        .then(html => {
            document.getElementById('conteudoPrincipal').innerHTML = html
        })

        .catch(error => {
            console.error('Erro em carregar premiun.html',error)
        })
        
        
   


}







function finalizar(){


    // input de nome e telefone

    let nome = document.getElementById('name').value
    let telf = document.getElementById('telefone').value
     let numTelLimpo = telf.replace(/\D/g,'')
    let numTelFormadado = numTelLimpo.replace(/(\d{2})(\d{5})(\d{4})/,'($1)$2-$3')


    let mensagem = document.querySelectorAll('[id^="msg-"]')
    mensagem.forEach(msg => msg.remove())

    let excluirFinalizador = document.getElementById('finalizar')

    if(excluirFinalizador){
        excluirFinalizador.remove();
    }

    let elementoPai = document.getElementById('father')

    let elementoFinalizador = document.createElement('div')
    elementoFinalizador.id = 'finalizar'

    let resumo = `Seu pedido foi finalizado por:<br>
    <strong>${nome}</strong><br><br>
    Com o número de Telefone:<br>
    <strong>${numTelFormadado}</strong><br><br>`

    let total = 0


    for(protudo in carrinho){
        resumo += `${protudo} : ${carrinho[protudo]} unidades<br>`
        total += carrinho[protudo] 
    }

    resumo += `<br> 
    Total acumulado foi! <br><br> ${total} unidades .<br><br>`

    resumo += `<button onclick = "reiniciar()">Fechar</button>`

    elementoFinalizador.innerHTML = resumo

    elementoPai.appendChild(elementoFinalizador)

    // VERIFICAÇÕES:

    if(!total){
        elementoFinalizador.innerHTML = `Por favor. Adicione algum item para finalizar o pedido!!`
        setTimeout(() => elementoFinalizador.remove(),5000)
        return
    }

    // verificar se o nome e telefone foi preenchido

    if(!nome || !numTelLimpo){
        elementoFinalizador.innerHTML = `Por favor preencha  o <strong>Nome e Telefone</strong>`
        setTimeout(() => elementoFinalizador.remove(),5000)
    }else if(numTelLimpo.length !== 11){
        elementoFinalizador.innerHTML = `Preencha o telefone com 11 números!!
        <strong> Exemplo:</strong><br>
        <b>31922222222</b>`
        setTimeout(() => elementoFinalizador.remove(),5000)
    }

    let inputNameTel = document.querySelectorAll('input[type="tel"],input[type="text"] ')
    inputNameTel.forEach(inputs => inputs.value ='')


}