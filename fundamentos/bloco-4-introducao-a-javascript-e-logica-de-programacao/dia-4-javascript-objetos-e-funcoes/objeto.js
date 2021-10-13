let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Copiar
// Bem-vinda, Margarida

function mensagemDeBoasVindas() {
  return `Bem-vinda, ${info.personagem}`;
}

console.log(mensagemDeBoasVindas())

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = "Sim";
console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (i in info) {
  console.log(i)
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (i in info) {
  console.log(info[i]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura(as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// Copiar
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "sim",
};

for (let i in info) {
  if (i === "recorrente") {
    console.log("ambos recorrentes");
  }
  console.log(`${info[i]} e ${info2[i]}`)
}
