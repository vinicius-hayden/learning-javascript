//Since the formula for converting from Fahrenheit to Celsius is JS = 5/9 (F – 32), read a
// temperature value in Fahrenheit and display it in Celsius

function fahrenheitToCelsius(fahrenheit_temperature){
    if(typeof(fahrenheit_temperature) == "number"){
        celsius = (fahrenheit_temperature - 32) * (5/9)
        console.log(`${fahrenheit_temperature}°F = ${celsius}°C`)
    }
    else {
        console.log("Invalid Input: please insert a number")
    }
}

// if given fahrenheit temperature parameter is not a number
fahrenheitToCelsius("number");
// if given fahrenheit temperature paramter is a number
fahrenheitToCelsius(32);