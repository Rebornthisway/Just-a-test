function isDivisible(n, x, y) {
  return (n%x == 0 && n%y ==0) ? true : false;

function basicOp(operation, value1, value2)

  {
  if(operation == '+')return value1 + value2;
  if(operation == '-')return value1 - value2;
  if(operation == '*')return value1 * value2;
  if(operation == '/')return value1 / value2;
}

function digitize(n) {
    return String(n).split('').map(Number).reverse()

let stringToNumber = function(str){
  return parseInt(str);
}

