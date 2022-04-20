// Create a program that receives three values and returns the two greatest.

function twoGreatest(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        console.log(`${num2}, ${num3}`);
    }
    else if(num2 < num1 && num2 < num3){
        console.log(`${num1}, ${num3}`);
    }
    else if(num3 < num2 && num3 < num1){
        console.log(`${num2}, ${num1}`);
    }
    else{
        console.log("None of the inputs are valid, try again");
    }
}

twoGreatest(2,5,7);