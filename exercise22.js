// Create a program that takes 3 numbers and calculate the weighted average between them.
// Assume that the largest number has a weight of 5 and the other two are given a weight of 2.5.

function weightedAverage(firstNum, secondNum, thirdNum){
    
    if(firstNum > secondNum && firstNum > thirdNum){
        var weightedAverage = (((firstNum * 0.5) + (secondNum * 0.25) + (thirdNum * 0.25)/3)); 
        return weightedAverage.toFixed(2);
    }
    else if(secondNum > firstNum && secondNum > thirdNum){
        var weightedAverage = (((secondNum * 0.5) + (firstNum * 0.25) + (thirdNum * 0.25)/3));
        return weightedAverage.toFixed(2);
    }
    else if(thirdNum > firstNum && thirdNum > secondNum){
        var weightedAverage = (((thirdNum * 0.5) + (secondNum * 0.25) + (firstNum * 0.25)/3));
        return weightedAverage.toFixed(2);
    }
    else{
        console.log("Cannot calculate: One input must be greater than the rest");
    }
    
}

console.log(weightedAverage(2,1,5));