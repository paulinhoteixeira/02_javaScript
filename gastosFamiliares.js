let financeiro = { 
    receitas: [10, 20, 20], 
    despesas: [30, 5, 10] 
};



function saldo(entrada, saida){
    let receita = 0
    let despesa = 0
    for(let i = 0; i < entrada.length; i++){
        receita += entrada[i];
    }

    for(let i = 0; i < saida.length; i++){
        despesa += saida[i];
    }

    saldo = receita - despesa

    if(saldo < 0){
        return "Saldo positivo: " + saldo
    } else {
        return "Saldo negativo: " + saldo
    }

}

console.log(saldo(financeiro.receitas, financeiro.despesas))

