let num = document.querySelector('input#fnum') // puxando info la no fnum
let lista = document.querySelector('select#flista') // pux info do flista
let res = document.querySelector('div#res') // pux info da div res;
let valores = [] // vetor utilizado para analisar os dados. (Array)


// funções criada para a adiação dos elementos. 
function isNumero(n) { // verifica se (n) é um número.
    if(Number(n) >= 1 && Number(n) <= 100) { // só aceitará valores nesse range.
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // verifica se (n) está na lista.
    if(l.indexOf(Number(n))!= -1) { // -1 significa que o valor não foi encontrado na lista.
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // !inLista - quer dizer que ele só vai adicionar se o valor digitado n estiver na lista. valores nesse caso é o vetor. 
        valores.push(Number(num.value)) // push adiciona valores a um array
        let item = document.createElement('option') // esse comando cria uma tag option
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // usado para adicionar na lista.
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // após o usuario dar o valor, o num será apagado.
    num.focus() // isso dará foco ao campo de valor do usuario.
}

function finalizar() {
    if(valores.length == 0) { 
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = '' 
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
        
}