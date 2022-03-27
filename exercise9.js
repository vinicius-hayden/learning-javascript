// Create an algorithm that calculates a student's semester grade. The semester grade is obtained
// by the arithmetic mean between the 2-month grade. Each quarter note is composed of
// 2 exam notes.
var gets = require('readline-sync');

function arithmeticMean(num1, num2){
    let mean = (num1+num2)/2
    return mean;
}

function semesterGrade(){
    var firstGradeFirstBimester =  gets.questionInt("Type your first grade of your first bimester: ")
    var secondGradeFirstBimester = gets.questionInt("Type your second grade of your first bimester: ")
    var firstBimesterMean = arithmeticMean(firstGradeFirstBimester,secondGradeFirstBimester)
    console.log(`First bimester mean: ${firstBimesterMean}`);

    var firstGradeSecondBimester =  gets.questionInt("Type your first grade of your second bimester: ")
    var secondGradeSecondBimester = gets.questionInt("Type your second grade of your second bimester: ")
    var secondBimesterMean = arithmeticMean(firstGradeSecondBimester,secondGradeSecondBimester)
    console.log(`Second bimester mean: ${secondBimesterMean}`);
    console.log(`Semester mean: ${arithmeticMean(firstBimesterMean,secondBimesterMean)}`)
}

semesterGrade()
