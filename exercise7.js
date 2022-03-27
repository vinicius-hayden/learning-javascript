// Request a person's age in days and display age in years, months and days.

function ageInYearsMonthsAndDays(age){
    var months_age = age * 12;
    var days_age = age * 365;
    console.log(`Age in Years: ${age}`)
    console.log(`Age in Months: ${months_age}`)
    console.log(`Age in Days: ${days_age}`)
}
