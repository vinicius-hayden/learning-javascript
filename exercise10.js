// Create an algorithm that converts a given speed in m/s by the user to
// km/h. To do this, multiply the value in m/s by 3.6.

function mstoKm(speed){
    if(typeof(speed) == "number"){
        var kmperh = speed * 3.6
        console.log(kmperh);
    }
    else{
        console.log("Invalid Input: make sure you type in a number.")
    }
}

// if given speed parameter is not a number
mstoKm("Hello!");
// if given speed parameter is a number
mstoKm(3.6);
