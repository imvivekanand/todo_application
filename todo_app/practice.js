// function fibonacci(num) {
//     let fS = [0, 1];
  
//     for (let i = 2; i < num; i++) {
//       let a = fS[i-1];
//       let b = fS[i-2];
//       fS.push(a + b);
//     }
  
//     return fS;
//   }
  
//   // call the fibonacci function with the desired number of terms
//   console.log(fibonacci(100)); // prints [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  
function binaryToDecimal(binary) {
  let decimal = 0;
  let base = 1;
  let binaryNum = binary;

  while (binaryNum > 0) {
    let lastDigit = binaryNum % 10;
    binaryNum = Math.floor(binaryNum / 10);
    decimal += lastDigit * base;
    base *= 2;
  }

  return decimal;
}

let binaryNum = "101010";
let decimalNum = binaryToDecimal(binaryNum);
console.log(decimalNum); // Output: 42

console.log(Math.ceil(2.1));

let vivek = {
  add: (function Add(a,b){return(a+b)}),
  sub: (35 - 2),
}

console.log(vivek.add(1,2));