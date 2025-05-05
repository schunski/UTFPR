// Exercise 1
function calculadora(n1, n2, operador) {
    switch(operador) {
        case '-':
            let subtracao = n1 + n2;
            return subtracao;
        case '+':
            let soma = n1 + n2;
            return soma;
        case '/':
            let divisao = n1 + n2;
            return divisao;
        case '*':
            let mult = n1 + n2;
            return mult;
        default:
            return 'Operação não reconhecida.'
    };
};

// Exercise 2
function operacao(n1, n2, escolha) {
    switch(escolha) {
        case 1:
            let media = (n1 + n2) / 2;
            return media;
        case 2:
            if (n1 > n2) {
                let sub = n1 - n2;
                let diferenca = sub
                return diferenca;
            } else if(n2 > n1) {
                let sub = n2 - n1;
                let diferenca = sub;
                return diferenca;
            } else {
                return 'Os números são iguais!';
            }
        case 3:
            let mult = n1 * n2;
            return mult;
        case 4:
            let div = n1 / n2;
            return div;
        default:
            return 'Operação não reconhecida.'
    };
};

// Exercise 3
function idadeNadador(idade) {
    switch(true) {
        case (idade >= 5 && idade <= 7):
            document.write(`infantil A`);
            break;

        case (idade >= 8 && idade <= 10):
            document.write(`infantil B`);
            break;

        case (idade >= 11 && idade <= 13):
            document.write(`juvenil A`);
            break;
        
        case (idade >= 14 && idade <= 17):
            document.write(`juvenil B`);
            break;

        case (idade >= 18):
            document.write(`adulto`);
            break;
        
        case (idade >= 60):
            document.write(`sênior`);
            break;
    };
};

// Exercise 4
function pesoIdeal(imc) {
    switch(true) {
        case imc < 20:
            return `Abaixo do peso`;

        case imc <= 25:
            return `Normal`;

        case imc <= 30:
            return `Excesso de peso`;

        case imc <= 35:
            return `Obesidade`;
        
        case imc > 35:
            return `Obesidade mórbida`;
    };
};

// Exercise 5
function analiseSalario(salario) {
    switch(true) {
        case salario < 945:
            reajuste = salario * 0.25;
            return reajuste;

        case salario < 1025:
            reajuste = salario * 0.10;
            return reajuste;
        
        case salario >= 1025:
            reajuste = salario * 0.03;
            return reajusteMaior;
    };
};

// Exercise 6
function analiseVenda(valorCompra) {
    switch(true) {
        case valorCompra < 10:
            lucro = valorCompra * 0.70;
            valorVenda = valorCompra + lucro;
            return valorVenda;
        
        case valorCompra < 30:
            lucro = valorCompra * 0.50;
            valorVenda = valorCompra + lucro;
            return valorVenda;
        
        case valorCompra < 50:
            lucro = valorCompra * 0.40;
            valorVenda = valorCompra + lucro;
            return valorVenda;
        
        case valorCompra >= 50:
            lucro = valorCompra * 0.30;
            valorVenda = valorCompra + lucro;
            return valorVenda;
    };
};

// Exercise 7
function condicaoPagamento(preco, escolha) {
    switch(escolha) {
        case 1:
            desconto = preco * 0.10;
            valorFinal = preco - desconto;
            return valorFinal;
        
        case 2:
            desconto = preco * 0.15;
            valorFinal = preco - desconto;
            return valorFinal;
        
        case 3:
            return preco;
        
        case 4:
            juros = preco * 0.10;
            valorFinal = preco + juros;
            return valorFinal;
        
        default:
            return `Operação inválida.`
    };
};

// Exercise 8
function creditoEspecial(saldoMedio) {
    switch(true) {
        case saldoMedio >= 0 && saldoMedio < 200:
            return 'Você não tem direito a crédito.';
        
        case saldoMedio >= 200 && saldoMedio < 400:
            return `20% do valor do saldo`;

        case saldoMedio >= 400 && saldoMedio <= 600:
            return `30% do valor do saldo`;

        case saldoMedio > 600:
            return `40% do valor do saldo`;
        
        default:
            return `Seu saldo é inválido.`;
    };
};

function planeta(peso, escolha) {
    switch(escolha) {
        case 1:
            pesoPlaneta = (peso / 10) * 0.37;
            return pesoPlaneta;
        
        case 2:
            pesoPlaneta = (peso / 10) * 0.88;
            return pesoPlaneta;
        
        case 3:
            pesoPlaneta = (peso / 10) * 0.38;
            return pesoPlaneta;
        
        case 4:
            pesoPlaneta = (peso / 10) * 2.64;
            return pesoPlaneta;
        
        case 5:
            pesoPlaneta = (peso / 10) * 1.15;
            return pesoPlaneta;
        
        case 6:
            pesoPlaneta = (peso / 10) * 1.17;
            return pesoPlaneta;

        default:
            return `Escolha Inválida.`;
    };
};

// Exercise 10
function analiseIpva(categoria, valorVeiculo) {
    switch(categoria) {
        case 1:
            valorIpva = valorVeiculo * 0.035;
            return valorIpva;
    
        case 2:
            valorIpva = valorVeiculo * 0.025;
            return valorIpva;
        
        default:
            return `Operação inválida.`
    };
};
