const sum = require('./sum');

test('adds 1 plus 2 to equal 3', ()=>{
  expect(sum(1,2)).toBe(3);
});

test('adds 0 plus 0 to equal 3', ()=>{
  expect(sum(0,0)).toBe(0);
});

test('adds 4 plus "5" to equal "accept only numbers"',()=>{
  expect(()=>{sum(4,"5")}).toThrow('parameters must be numbers');
});

test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada',()=>{
  expect(()=>{sum(4,"5")}).toThrowError('parameters must be numbers');
});