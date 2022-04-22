//Write a program that receives the number equivalent to the month and prints the number of days in this month.

const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthsDays = [31, 28, 31, 30, 31, 30, 31, 30, 31, 31 , 30, 31];

function daysinAMonth(month){
    let monthIndex = -1;
    for(let i = 0; i < monthsName.length; i++){
        if(month.toLowerCase() == monthsName[i].toLowerCase()){
            monthIndex = i;
        }
    }

    if(monthIndex == -1){
        console.log("Invalid Month");
        return;
    }
    
    console.log(`The ${month.toLowerCase()} month has ${monthsDays[monthIndex]} days`);
}

daysinAMonth('JANUARY');