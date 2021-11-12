function encode(str){
  let vogals = 'aeiou';
  let output = ''
  return str.split('').map((value)=>if(vogals.indexOf(value)>-1?output+=value:output+=(vogals.indexOf(value)+1)))
}