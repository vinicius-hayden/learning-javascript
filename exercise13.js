// Write a program that generates the reverse of a number (example: the reverse of 498 is 894).

function inverseNumber(num){
  let rev = 0;
  let lastDigit;
  while(num != 0){
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num/10);
  }
  return rev
}

console.log(inverseNumber(256));