import {data} from "./dados.js";

function menorValor(data) {
    let atual = 0, menor = {};
    for(let i = 0; i < data.length; i++) {
        //final de semana
        if(data[i].valor === 0) {
            continue;
        }else{
            atual = data[i];
        }
        for(let j = i + 1; j < data.length; j++) {
            //final de semana
            if(data[j].valor === 0) {
                continue;
            }else if(atual.valor > data[j].valor){
                if(menor.valor != 0 && menor.valor < data[j].valor) {
                    menor = menor;
                }else{
                    menor = data[j];
                }
            }else{
                if(menor.valor != 0 && menor.valor < atual.valor) {
                    menor = menor;
                }else{
                    menor = atual;
                }
            }
        }
    }
    return menor;
}

function maiorValor(data) {
    let atual = 0, maior = {};
    for(let i = 0; i < data.length; i++) {
        //final de semana
        if(data[i].valor === 0) {
            continue;
        }else{
            atual = data[i];
        }
        for(let j = i + 1; j < data.length; j++) {
            //final de semana
            if(data[j].valor === 0) {
                continue;
            }else if(atual.valor > data[j].valor){
                if(maior.valor != 0 && maior.valor > atual.valor) {
                    maior = maior;
                }else{
                    maior = atual;
                }
            }else{
                if(maior.valor != 0 && maior.valor > data[j].valor) {
                    maior = maior;
                }else{
                    maior = data[j].valor;
                }
            }
        }
    }
    return maior;
}

function obterMedia(data) {
    let count = 0;
    let somaFaturamento = data.reduce((accumulator, currentValue) => {
        //somente dias com faturamento
        if(currentValue.valor != 0) {
            count += 1;
            return accumulator + currentValue.valor;
        }
        return accumulator;
    }, 0);
    return somaFaturamento / count;
}

function faturamentoDiario(media, data) {
    let dias = data.filter((currentElement) => {
        return currentElement.valor > media;
    });
    return dias.length;
}


let menorFaturamento = menorValor(data);
let maiorFaturamento = maiorValor(data);
console.log(`Menor Faturamento Foi Ocorrido no dia ${menorFaturamento.dia} com o valor R$ ${menorFaturamento.valor.toFixed(2)}`);
console.log(`Maior Faturamento Foi Ocorrido no dia ${maiorFaturamento.dia} com o valor de R$ ${maiorFaturamento.valor.toFixed(2)}`);
console.log(`Nº de Dias que tiveram faturamento superior á R$ ${obterMedia(data).toFixed(2)} foram ${faturamentoDiario(obterMedia(data), data)} dias.`);