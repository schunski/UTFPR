function calcularFatura(consumo) {
    let consumoTotal = consumo * 0.41;
    let taxaManutencao = consumo * 0.03;
    let fatura = consumoTotal + taxaManutencao + 1.70;

    return { consumoTotal, taxaManutencao, fatura };
};

function calcularSalarioLiquido(salarioBruto) {
    let inss = salarioBruto * 0.05;
    let ir = salarioBruto * 0.07;
    let auxilioAlimentacao = salarioBruto * 0.08;
    let descontos = inss + ir + auxilioAlimentacao;
    let salarioLiquido = salarioBruto - descontos;

    return { descontos, salarioLiquido };
};

function calcularLucro(precoCusto, precoVenda, qteItens) {
    let precoTotal = precoVenda * qteItens;
    let lucro = (precoVenda - precoCusto) * qteItens;

    return { precoTotal, lucro };
}

function calcularPrestacoes(totalPrestacoes, prestacoesPagas, prestacaoValor) {
    let totalPago = prestacoesPagas * prestacaoValor;
    let qtePrestacaoRestante = totalPrestacoes - prestacoesPagas;
    let valorPrestacoesRestante = qtePrestacaoRestante * prestacaoValor;

    return { totalPago, qtePrestacaoRestante, valorPrestacoesRestante };
};

function trocaVariavel (n1, n2, n3) {
    n3 = n1;
    n1 = n2;
    n2 = n3;

    return { n1, n2 };
};

function calcularMedia(nota1, nota2, nota3, nota4) {
    let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 1 + nota4 * 4) / 10;

    return mediaFinal;
};

function calcularDesconto(valorProduto) {
    let desconto = valorProduto * 0.09;
    let produtoDescontado = valorProduto - desconto;

    return produtoDescontado;
};

function calcularTroco(valorCompra, valorRecebido) {
    let troco = valorRecebido - valorCompra;

    if (valorRecebido < valorCompra) {
        document.write(`Não há troco para o valor recebido.`)
    } else {
        document.write(`O valor de troco é R$${troco}`);
    }
};

function converterCentimetros(metros) {
    let centimetros = metros * 100;

    return centimetros;
}

function calcularSalario(salarioMinimo, salarioFuncionario) {
    qteSalarioMinimo = salarioFuncionario / salarioMinimo;

    return qteSalarioMinimo;
}

function calcularMulta(salario, conta1, conta2) {
    let jurosConta1 = conta1 * 0.02;
    let jurosConta2 = conta2 * 0.02;
    let somaTotalConta1 = conta1 + jurosConta1;
    let somaTotalConta2 = conta2 + jurosConta2;
    let restanteSalario = salario - somaTotalConta1 - somaTotalConta2;

    return { restanteSalario, somaTotalConta1, somaTotalConta2 };
}

function calcularRendimento(deposito, taxaJuros) {
    let jurosConvertido = taxaJuros / 100;
    let rendimento = deposito * jurosConvertido;
    let rendimentoTotal = deposito + rendimento;

    return { rendimento, rendimentoTotal };
}