// Exercise 1
function analisarParImpar(numero) {
    if(numero % 2 == 0 ) {
        return `par`
    } else {
        return `impar`
    };
};

// Exercise 3
function pesoIdeal(altura, sexo) {
    if(sexo == `m` || sexo == `M`) {
        let homem = (72.7 * altura) - 58;
        return homem.toFixed(2);
    } else if (sexo == `f` || sexo == `F`) {
        let mulher = (62.1 * altura) - 44.7;
        return mulher.toFixed(2);
    } else {
        return `ERRO <br> AVISO: Você deve refazer, anteriormente foi informado um valor invalido.`;
    }
};

// Exercise 4
function calculadora(n1, n2) {
    if(operacao == `-`) {
        let subtracao = n1 - n2;
        return subtracao;
    } else if(operacao == `+`) {
        let soma = n1 + n2;
        return soma;
    } else if(operacao == `/`) {
        let divisao = n1 / n2;
        return divisao;
    } else if(operacao == `*`) {
        let mult = n1 * n2;
        return mult;
    } else {
        return `ERRO: <BR> AVISO: Simbolo escolhido invalidado.`;
    };
};

// Exercise 5
function numeroMenor(n1, n2) {
    let resposta;
    if(n2 > n1) {
        n2 = prompt(`O segundo valor inserido é menor que o primeiro valor, informe novamente um segundo valor:`);
        if(n2 > n1) {
            return `Suas chances acabaram!`
        }
    } else {
        resposta = n1 - n2;
        return resposta;
    };
};

// Exercise 6
function verificarNumero(numero) {
    if(numero > 0) {
        return `Positivo!`;
    } else {
        return `Negativo.`
    };
};

// Exercise 6
function verificarNulo(numero) {
    if(numero < 0 || numero > 0) {
        return verificarNumero(numero);
    } else {
        return `Nulo.`
    };
};

// Exercise 7
function verificarNumMaior(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else if(n1 < n2) {
        return n2;
    } else if(n1 == n2) {
        let n1 = prompt(`Você informou 2 números com o mesmo valor, informe o primeiro número novamente: `);
        let n2 = prompt(`Informe o segundo número novamente `);
        if(n1 == n2) {
            return `ERRO <br> AVISO: Suas chances acabaram e você falhou.`
        } else {
            return verificarNumMaior(n1, n2);
        };
    };
};


// Exercise 8
function maiorNumero(n1, n2, n3) {
    if(n1 > n2 && n2 >= n3) {
        return n1;
    } else if(n2 > n1 && n1 >= n3) {
        return n2;
    } else if(n3 > n1 && n1 >= n2) {
        return n3;
    } else if(n1 == n2 && n2 == n3) {
        return n1;
    };
};

// Exercise 9
function ordemCrescente(n1, n2, n3) {
    if(n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    };
    if(n1 > n3) {
        aux = n1;
        n1 = n3;
        n3 = aux;
    };
    if(n2 > n3) {
        aux = n2;
        n2 = n3;
        n3 = aux;
    };
    
    return `${n1}, ${n2}, ${n3}`;
};

// Exercise 10
function ordemDecrescente(n1, n2, n3) {
    if(n1 < n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    };
    if(n1 < n3) {
        aux = n1;
        n1 = n3;
        n3 = aux;
    };
    if(n2 < n3) {
        aux = n2;
        n2 = n3;
        n3 = aux;
    };
    
    return `${n1}, ${n2}, ${n3}`;
};

// Exercise 11
function senhaValida(senha) {
    if(senha == '1234'){
        return `ACESSO PERMITIDO`;
    } else {
        return `ACESSO NEGADO`;
    };
};

// Exercise 12
function analiseCompra(quantidade) {
    if (quantidade < 12) {
        let preco = quantidade * 0.30;
        return preco;
    } else {
        let preco = quantidade * 0.25;
        return preco;
    };
};

// Exercise 13
function analiseSoma(a, b, c) {
    if (a + b < c) {
        return `O valor de A + B é menor que C.`
    } else {
        return `O valor de A + B é não é menor que C.`
    };
};

// Exercise 14
function imc(altura, peso) {
    let imc = peso / (altura * 2);
    if(imc < 18.5) {
        return `${imc.toFixed(1)} | Análise: Abaixo do peso`;
    } else if( imc == 18.5 && imc < 25) {
        return `${imc.toFixed(1)} | Análise: Peso normal`;
    } else if(imc >= 25 && imc <= 30) {
        return `${imc.toFixed(1)} | Análise: Acima do Peso`;
    } else if(imc > 30) {
        return `${imc.toFixed(1)} | Análise: Obeso`;
    };
};

// Exercise 15
function condPagamento(valorEtiqueta, escolha) {
    if(escolha == 1) {
        let desconto = valorEtiqueta * 0.10;
        let valorFinal = valorEtiqueta - desconto;
        return valorFinal;
    } else if(escolha == 2) {
        let desconto = valorEtiqueta * 0.15;
        let valorFinal = valorEtiqueta - desconto;
        return valorFinal;
    } else if(escolha == 3) {
        return valorEtiqueta;
    } else if(escolha == 4) {
        let juros = valorEtiqueta * 0.10;
        let valorFinal = valorEtiqueta + juros;
        return valorFinal;
    } else {
        return ` [ERRO] - Escolha inválida.`
    };
};

// Exercise 16
function doarSangue(idade) {
    if(idade >= 18 && idade <= 67) {
        return 'Permitido doar sangue!'
    } else {
        return 'Não é permitido doar sangue!'
    };
};


// Exercise 17
function operacao(numero, escolha) {
    if(escolha == 1) {
        if(numero % 2 == 0) {
            return `O número é par`;
        } else {
            return `O número é impar.`
        }
    } else if(escolha == 2) {
        if(numero > 0) {
            return `O número é positivo.`
        } else if(numero == 0) {
            return `O número é nulo`;
        } else {
            return `O número é negativo`;
        };
    } else {
        return `Operação inválida`;
    };
};

// Exercise 18
function divisao(numero) {
    if(numero % 5 == 0) {
        return `O número é divisível por 5`;
    } else {
        return `O número não é divisível por 5.`
    };
};

// Exercise 19
function placar(t1, t2) {
    if(t1 == t2) {
        return `O jogo ficou empatado.`;
    } else if(t1 > t2) {
        return `Vitória do time 1!`;
    } else if(t2 > t1) {
        return `Vitória do time 2!`;
    };
};

// Exercise 20
function analiseLetra(letra) {
    let letraMinuscula = letra.toLowerCase();
    if(letraMinuscula == `a` || letraMinuscula == `e` || letraMinuscula == `i` || letraMinuscula == `o` || letraMinuscula == `u`) {
        return `Vogal.`;
    } else if(/^[0-9]+$/.test(letra)) {
        return `Dado informado está inválido.`;
    } else {
        return `Consoante`;
    }
};