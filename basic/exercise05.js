// Read an integer and display its successive number.

function integerSuccesor(integer){
    var successor = integer + 1
    if(Number.isInteger(integer) == false ){
        console.log("Invalid Input: The number must be an Integer")
    }
    else{
        console.log(`Integer Successor: ${successor}`)
    }
}

// when given integer parameter is not a integer
integerSuccesor("z");

integerSuccesor(true);

// when given integer parameter is an integer

integerSuccesor(10);