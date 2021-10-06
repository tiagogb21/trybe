let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let exercicio1 = numbers.forEach((value) => console.log(value));

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let exercicio2 = numbers.reduce((a, b) => a + b)

console.log(exercicio2);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = exercicio2 / numbers.length;

console.log(media);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let exercicio4 = media > 20 ? "valor maior que 20" : "valor menor que 20";

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (maior < numbers[i]) {
        maior = numbers[i];
    }
}

console.log(maior);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let contImpar = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        contImpar++;
    }
}

if (contImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
}

console.log(contImpar);

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;]

let menor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (menor > numbers[i]) {
        menor = numbers[i];
    }
}

console.log(menor);

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let storage = [];

for (let i = 0; i <= 25; i++) {
    storage.push(i);
}

console.log(storage);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numeroDividoPor2 = storage.map((value) => value / 2);
console.log(numeroDividoPor2);

// Bônus:

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let position;

function ordenaCrescente(...arrayNumbers) {
    for (let index = 1; index < arrayNumbers[0].length; index++) {
        for (let secondIndex = 0; secondIndex < index; secondIndex++) {
            if (arrayNumbers[0][index] < arrayNumbers[0][secondIndex]) {
                position = arrayNumbers[0][index];
                arrayNumbers[0][index] = arrayNumbers[0][secondIndex];
                arrayNumbers[0][secondIndex] = position;
            }
        }
    }
    return arrayNumbers[0];
}

console.log(ordenaCrescente(numbers));

// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

function ordenaDecrescente(...arrayNumbers) {
    for (let index = 1; index < arrayNumbers[0].length; index++) {
        for (let secondIndex = 0; secondIndex < index; secondIndex++) {
            if (arrayNumbers[0][index] > arrayNumbers[0][secondIndex]) {
                position = arrayNumbers[0][index];
                arrayNumbers[0][index] = arrayNumbers[0][secondIndex];
                arrayNumbers[0][secondIndex] = position;
            }
        }
    }
    return arrayNumbers[0];
}

console.log(ordenaDecrescente(numbers));

// 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

function multiplicaNumbers(arrayNumbers) {
    let storage = [];
    for (let firstIndex = 0; firstIndex < arrayNumbers.length - 1; firstIndex++) {
        storage.push(arrayNumbers[firstIndex] * arrayNumbers[firstIndex + 1]);
    }
    return storage;
}

console.log(multiplicaNumbers(numbers))