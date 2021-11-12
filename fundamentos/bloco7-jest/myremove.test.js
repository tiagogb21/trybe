const myRemove = require('./myremove');

describe('testa a função myRemove', () => {

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado',()=>{
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array esperado',()=>{
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado',()=>{
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});
