const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

console.log(books[0].author.birthYear);

function authorBornIn1947() {
  return books.find(({ author }) => author.birthYear === 1947);
}

console.log(authorBornIn1947());

// 2 - Retorne o nome do livro de menor tamanho.

function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  smallNameBook = books.forEach(function (value) {
    if (nameBook.length > value.name.length) {
      nameBook = value.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  let book;
  // escreva aqui o seu código
  smallNameBook = books.forEach(function (value) {
    if (value.name.length === 26) {
      book = value;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return book;
}

console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc());

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every(
    (value) => Math.floor((value.author.birthYear % 100) + 1) === 20
  );
}

console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s() {
  return books.some(
    (value) => value.releaseYear % 1900 > 80 || value.releaseYear % 1900 < 80
  );
}

console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique() {
  let storeBirthYears = [];
  books.forEach((value) => storeBirthYears.push(value.author.birthYear));
  return new Set(storeBirthYears).size === storeBirthYears.length;
}
