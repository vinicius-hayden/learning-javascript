// Create a program that receives three numbers and return the greater among them

function greaterNum(firstNum, secondNum, thirdNum){
    if(firstNum > secondNum && firstNum > thirdNum){
      return firstNum;
    }
    else if(secondNum > firstNum && secondNum > thirdNum){
      return secondNum;
    }
    else if(thirdNum > firstNum && thirdNum > secondNum){
      return thirdNum;
    }
    else{
      console.log("Draw")
    }
}

console.log(greaterNum(1,2,3));