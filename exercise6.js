// Read two integers and display the quotient and remainder of the integer division between them.

function divisionQuocientAndRemainder(dividend, divisor){
    var quo = Math.floor(dividend/divisor);
    var rem = dividend%divisor;
    if(Number.isInteger(dividend) == false && Number.isInteger(divisor)){
        console.log("Invalid Input: Both numbers must be an Integer")
    }
    else{
        console.log(`Quotient: ${quo}`)
        console.log(`Remainder: ${rem}`)
    }
}

// if given dividend and divisor are not an integer
divisionQuocientAndRemainder(2.5,z);

// if given dividend or divisor are an integer
divisionQuocientAndRemainder(20,2);