function encode(str){
  let vogals = 'aeiou';
  let output = '';
  str.split('').map((value)=>vogals.indexOf(value)>-1?output+=(vogals.indexOf(value)+1):output+=value);
  return output
}

function decode(str){
  let vogals = 'aeiou';
  let numbers = '12345';
  let output = '';
  str.split('').map((value)=>numbers.indexOf(value)>-1?output+=vogals[numbers.indexOf(value)]:output+=value);
  return output
}

module.exports = {encode,decode};