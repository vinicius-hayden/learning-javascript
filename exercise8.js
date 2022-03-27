//Since the formula for converting from Fahrenheit to Celsius is JS = 5/9 (F – 32), read a
// temperature value in Fahrenheit and display it in Celsius

function fahrenheitToCelsius(fahrenheit_temperature){
    celsius = (fahrenheit_temperature - 32) * (5/9)
    console.log(`${fahrenheit_temperature}°F = ${celsius}°C`)
}
