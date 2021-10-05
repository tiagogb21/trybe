// 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

function quadrado(n){
    let quadrado = [];
    for(let i = 0; i<n; i++){
        let linha = [];
        for(let j = 0; j<n; j++){
            linha.push("*");
        }
        linha = linha.join("");
        quadrado.push(linha);
        linha = [];
    }
    return quadrado.join("\n");
}

console.log(quadrado(4))

// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

function triangulo(n){
    let quadrado = [];
    for(let i = 0; i<=n; i++){
        let linha = [];
        for(let j = 0; j<i; j++){
            linha.push("*");
        }
        linha = linha.join("");
        quadrado.push(linha);
        linha = [];
    }
    return quadrado.join("\n");
}

console.log(triangulo(4))

// 3- Agora inverta o lado do triângulo. Por exemplo:
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

function triangulo(n){
    let quadrado = [];
    for(let i = 0; i<=n; i++){
        let linha = [];
        for(let j = 0; j<n; j++){
            if(j<i){
                linha.push(" ");
            } else if (j>=i) {
                linha.push("*");
            }
        }
        linha = linha.join("");
        quadrado.push(linha);
        linha = [];
    }
    quadrado.reverse();
    return quadrado.join("\n");
}

console.log(triangulo(4));

// 4- Depois, faça uma pirâmide com n asteriscos de base:
// 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

function quadrado(n){
    let quadrado = [];
    for(let i = 0; i<n; i++){
        let linha = [];
        for(let j = 0; j<n; j++){
            linha.push("*");
        }
        linha = linha.join("");
        quadrado.push(linha);
        linha = [];
    }
    return quadrado.join("\n");
}

console.log(quadrado(4))

// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

function triangulo(n){
    let quadrado = [];
    for(let i = 0; i<=n; i++){
        let linha = [];
        for(let j = 0; j<i; j++){
            linha.push("*");
        }
        linha = linha.join("");
        quadrado.push(linha);
        linha = [];
    }
    return quadrado.join("\n");
}

console.log(triangulo(4))

// 3- Agora inverta o lado do triângulo. Por exemplo:
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

function trianguloInvertido(n){
    let quadrado = [];
    for(let i = 0; i<=n; i++){
        let linha = [];
        for(let j = 0; j<n; j++){
            if(j<i){
                linha.push(" ");
            } else if (j>=i) {
                linha.push("*");
            }
        }
        linha = linha.join("");
        quadrado.push(linha);
        linha = [];
    }
    quadrado.reverse();
    return quadrado.join("\n");
}

console.log(trianguloInvertido(4));

// 4- Depois, faça uma pirâmide com n asteriscos de base:

function piramide(n){
    let quadrado = [];
    for(let i = 0; i<=n; i++){
        let linha = [];
        for(let j = 0; j<n; j++){
            if(j<i){
                linha.push(" ");
            } else if (j>=i) {
                linha.push("*");
            }
        }
        linha = linha.join("");
        n = Math.round(n/2)+1
        quadrado.push(linha);
        linha = [];
    }
    quadrado.reverse();
    return quadrado.join("\n");   
}

console.log(piramide(5))

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

function verificaPrimo(n){
    let cont = 0;
    if(n<=1){
        return `${n} não é primo`;
    }
    for(let i = 2; i<n; i++){
        if(n%i===0){
            cont++;
        }
    }
    if(cont>0){
        return `${n} não é primo`;
    }
    else if (cont===0){
        return `${n} é primo`;
    }
}

console.log(verificaPrimo(111))