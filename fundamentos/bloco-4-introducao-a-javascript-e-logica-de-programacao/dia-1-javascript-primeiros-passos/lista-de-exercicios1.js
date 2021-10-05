// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function calculadora(a, b, operador){
    switch(operador){
        case "soma":
            return soma(a,b);
        case "subtrai":
            return subtrai(a,b);
        case "multiplica":
            return multiplica(a,b);
        case "divide":
            return divide(a,b);
        case "modulo":
            return modulo(a,b);
    }
}

function soma(a,b){
    return a+b;
}

function subtrai(a,b){
    return a-b;
}

function multiplica(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function modulo(a,b){
    return a%b;
}

console.log(calculadora(3,4,"modulo"))

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let y = function qualOMaior(a,b){
    return a>b?a:b;
}

console.log(y(3,4))

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let z = function qualOMaiorDosTres(a,b,c){
    let arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.sort((a,b)=>b-a);
    return arr[0];
}

console.log(z(3,4,5))

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let k = function positivoNegativoZero(a){
    return a>0?"positive":a<0?"negative":"zero";
}

console.log(k(3));
console.log(k(-3));
console.log(k(0));

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let t = function anguloTriangulo(a,b,c){
    if (a<=0||a>=360){
        return `${a} é inválido`;
    }
    else if (b<=0||b>=360){
        return `${b} é inválido`;
    }
    else if (c<=0||c>=360){
        return `${c} é inválido`;
    }
    let soma = a + b + c;
    return soma===180?true:false;
}

console.log(t(30,40,110));
console.log(t(0, 90, 90));
console.log(t(360,0,0));

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let x = function movimentoPecaXadrez(peca){
    peca = peca.toLowerCase();
    switch(peca){
        case "peao":
            return "move uma casa na vertical e horizontal, nunca na diagonal";
        case "cavalo":
                return "move três casas na vertical e horizontal, depois move duas casas virando 90 graus, nunca move na diagonal";
        case "torre":
            return "move na vertical e diagonal até o limite do tabuleiro, nunca na diagonal";
        case "bispo":
            return "move na diagonal até o limite do tabuleiro, nunca na vertical ou na horizontal";
        case "dama":
            return "move na diagonal, vertical e horizontal até o limite do tabuleiro";
        case "rei":
            return "move para os lados, menos para diagonal";
    }
}

console.log(x("rei"))

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let n = function verificaNota(notaMaxima, nota){
    let notaPorcentual = (nota/notaMaxima)*100;
    if(notaPorcentual<50){
        return "F";
    }
    else if(notaPorcentual>=50&&notaPorcentual<60){
        return "E";
    }
    else if(notaPorcentual>=60&&notaPorcentual<70){
        return "D";
    }
    else if(notaPorcentual>=70&&notaPorcentual<80){
        return "C";
    }
    else if(notaPorcentual>=80&&notaPorcentual<90){
        return "B";
    }
    else if(notaPorcentual>90){
        return "A";
    }
}

console.log(n(100,75))

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// Bonus: use somente um if .

let p = function ehPar(a,b,c){
    let array = [];
    array.push(a);
    array.push(b);
    array.push(c);
    let teste = array.some((value)=>value%2);
    return teste;
}

console.log(p(1,2,3))
console.log(p(1,3,5))

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let i = function ehImpar(a,b,c){
    let array = [];
    array.push(a);
    array.push(b);
    array.push(c);
    let teste = array.some((value)=>value%2!==0);
    return teste;
}

console.log(i(2,3,4))
console.log(p(2,4,6))

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto

// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let l = function lucro(valorCusto, valorVenda){
    if(valorCusto<0){
        return `Erro: valorCusto é menor do que zero`;
    }
    else if(valorVenda<0){
        return `Erro: valorVenda é menor do que zero`;
    }
    let impostoSobreOCusto = 0.2*valorCusto;
    let valorCustoTotal = valorCusto + impostoSobreOCusto
    return 1000*(valorVenda - valorCustoTotal);
}

console.log(l(-1,2))

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let sl = function salarioLiquido(salarioBruto){
    let impostoInss;
    let impostoDeRenda;
    if(salarioBruto<=1556.94){
        impostoInss = 0.08*salarioBruto;
    }
    else if (salarioBruto>1556.94&&salarioBruto<2594.92){
        impostoInss = 0.09*salarioBruto;
    }
    else if (salarioBruto>=2594.93&&salarioBruto<5189.82){
        impostoInss = 0.11*salarioBruto;
    }
    else if (salarioBruto>5189.82){
        impostoInss = 570.88;
    }

    salarioBruto -= impostoInss;
    
    if(salarioBruto<1903.98){
        impostoDeRenda = 0;
    }
    else if(salarioBruto>1903.99&&salarioBruto<2826.66){
        impostoDeRenda = -142.80+0.075*salarioBruto;
    }
    else if(salarioBruto>=2826.67&&salarioBruto<3751.05){
        impostoDeRenda = -354.80+0.15*salarioBruto;
    }
    else if(salarioBruto>=3751.06&&salarioBruto<4664.68){
        impostoDeRenda = -636.13+0.225*salarioBruto;
    }
    else if(salarioBruto>=4664.68){
        impostoDeRenda = -869.36+0.275*salarioBruto;
    }

    return salarioBruto - impostoDeRenda;

}

console.log(sl(1500))