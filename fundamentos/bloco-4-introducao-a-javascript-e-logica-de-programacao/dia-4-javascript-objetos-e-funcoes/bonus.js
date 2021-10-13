// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.

// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |


// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

function escreveRomano(n) {

  let output = [];

  let objNum = {};

  let numero = "";

  for (let index = 1; index <= n; index++) {

    numero = ("M".repeat(index / 1000) + "D".repeat(index % 1000 / 500) + "C".repeat(index % 500 / 100) + "L".repeat(index % 100 / 50) + "X".repeat(index % 50 / 10) + "V".repeat(index % 10 / 5) + "I".repeat(index % 5));

    if (numero.indexOf("DCCCC") > -1) {
      numero = numero.replace("DCCCC", "CM");
    }

    if (numero.indexOf("CCCC") > -1) {
      numero = numero.replace("CCCC", "CD")
    }

    if (numero.indexOf("LXXXX") > -1) {
      numero = numero.replace("LXXXX", "XC")
    }

    if (numero.indexOf("XXXX") > -1) {
      numero = numero.replace("XXXX", "XL")
    }

    if (numero.indexOf("VIIII") > -1) {
      numero = numero.replace("VIIII", "IX")
    }

    if (numero.indexOf("IIII") > -1) {
      numero = numero.replace("IIII", "IV")
    }

    objNum[index] = numero;

    output.push(`|   ${numero}   |   ${index}   |`);

    numero = "";

  }

  console.log(objNum)

  return output.join("\n");

}

console.log(escreveRomano(1000))

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.



// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela função.

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

let par = []

for (let index1 = 0; index1 < vector.length; index1++) {
  for (let index2 = 0; index2 < vector[index1].length; index2++) {
    if (vector[index1][index2] % 2 === 0) {
      par.push(vector[index1][index2])
    }
  }
}

console.log(par)



// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
// Copiar
// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

let fruitQuantity = {};

for (let i = 0; i < basket.length; i++) {

  if (fruitQuantity[basket[i]] === undefined) {
    fruitQuantity[basket[i]] = 1;
  }

  else if (fruitQuantity[basket[i]] !== undefined) {
    fruitQuantity[basket[i]]++;
  }

}

console.log(fruitQuantity)