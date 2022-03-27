// Read an integer and display its successor.

function integerSuccesor(integer){
    var successor = integer + 1
    if(Number.isInteger(integer) == false ){
        console.log("Invalid Input: The number must be an Integer")
    }
    else{
        console.log(`Integer Successor: ${successor}`)
    }
}