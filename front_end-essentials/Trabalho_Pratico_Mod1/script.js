valor = document.querySelector('#valor');
prazo = document.querySelector('#prazo');
juros = document.querySelector('#juros');
prazoMes = document.querySelector('#prazo-mes');
jurosMes = document.querySelector('#juros-mes');
jurosAcumulados = document.querySelector('#juros-acumulados');
function simular(){
    prazoMes.value = Number(prazo.value)* 12;

    jurosMes.value = Math.pow(1 + Number(juros.value),1/12) - 1;

    let amortizacao = document.querySelectorAll(`tbody tr td:nth-child(2)`);
    let jurosTabela = document.querySelectorAll('tbody tr td:nth-child(3)');
    let total = document.querySelectorAll('tbody tr td:nth-child(4)');

    let saldoDevedor = Number(valor.value);
    for(let i= 0; i < amortizacao.length; i++){
        amortizacao[i].textContent = Number(valor.value/prazoMes.value).toFixed(2);

        jurosTabela[i].textContent = Number(saldoDevedor*jurosMes.value).toFixed(2);
        saldoDevedor -= Number(amortizacao[i].textContent);

        total[i].textContent = Number(amortizacao[i].textContent) + Number(jurosTabela[i].textContent);
    }
    jurosTotal = 0;
    saldoDevedor = Number(valor.value);
    for(let i = 0; i < prazoMes.value; i++){
        jurosTotal += Number(saldoDevedor*jurosMes.value);
        saldoDevedor -= Number(valor.value/prazoMes.value);
    }
    jurosAcumulados.value = jurosTotal.toFixed(2);

}