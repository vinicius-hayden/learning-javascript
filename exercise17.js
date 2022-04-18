// Write a program that takes a number and displays its module.

function module(num){
  if(num < 0){
    console.log(`|${num}| = ${num * -1}`)
  }
  else{
    console.log(`|${num}| = ${num}`)
  }
}

module(-13);