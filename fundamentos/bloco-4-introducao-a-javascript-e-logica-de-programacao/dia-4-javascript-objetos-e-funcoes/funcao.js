// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(string) {
  let comparaString = string.split("").reverse().join("");
  return string === comparaString;
}

console.log(verificaPalindrome("arara"))
console.log(verificaPalindrome("desenvolvimento"))



// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function indiceMaiorValor(arr) {
  maior = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maior < arr[i]) {
      maior = arr[i]
    }
  }
  return arr.indexOf(maior);
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]))



// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function indiceMaiorValor(arr) {
  menor = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (menor > arr[i]) {
      menor = arr[i]
    }
  }
  return arr.indexOf(menor);
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]))



// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// Valor esperado no retorno da função: Fernanda.

function maiorNome(arr) {
  let maiorNome = arr[0]
  for (let index = 0; index < arr.length; index++) {
    if (maiorNome.length < arr[index].length) {
      maiorNome = arr[index];
    }
  }
  return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];

// Valor esperado no retorno da função: 2.

function maisSeRepete(arr) {
  let compara = [];
  for (let index = 0; index < arr.length; index++) {
    if (compara[arr[index]] === undefined) {
      compara[arr[index]] = 1;
    }
    else if (compara[arr[index]] !== undefined) {
      compara[arr[index]]++;
    }
  }
  let teste = [...compara];
  let output = teste.sort((a, b) => b - a)
  let maisRepete = output[0]
  return compara.indexOf(maisRepete);
}

console.log(maisSeRepete([2, 3, 2, 5, 8, 2, 3]))



// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1 + 2 + 3 + 4 + 5 = 15.

function somaNumero(n) {
  let somatorio = 0;
  for (let i = 1; i <= n; i++) {
    somatorio += i;
  }
  return somatorio
}

console.log(somaNumero(5))



// 7 - Crie uma função que receba uma string word e outra string ending.Verifique se a string ending é o final da string word.Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
  if (word.length < ending.length) {
    return false;
  }
  let teste = word.substring(word.length, word.length - ending.length)
  console.log(teste)
  if (teste === ending) {
    return true;
  }
  else {
    return false;
  }
}

console.log(verificaFimPalavra("trybe", "be"))

console.log(verificaFimPalavra('joaofernando', 'fernan'));