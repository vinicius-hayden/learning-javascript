// Create an algorithm that calculates a student's semester grade. The semester grade is obtained
// by the arithmetic mean between the 2-month grade. Each quarter note is composed of
// 2 exam notes.
var gets = require('readline-sync');
var i = 0;
function arithmeticMean(num1, num2){
    let mean = (num1+num2)/2
    return mean;
}

function questionDataType(number_data){
    if(typeof(number_data) != "number"){
        console.log("Invalid Input: please make sure to insert a number")
        return false
    }
    else{
        return true
    }
}

function semesterGrade(){
    while(i <= 0){
        var firstGradeFirstBimester =  gets.questionInt("Type your first grade of your first bimester: ")
        questionDataType(firstGradeFirstBimester);
        if(questionDataType(firstGradeFirstBimester) == false){
            break
        }
        var secondGradeFirstBimester = gets.questionInt("Type your second grade of your first bimester: ")
        if(questionDataType(secondGradeFirstBimester) == false){
            break
        }
        var firstBimesterMean = arithmeticMean(firstGradeFirstBimester,secondGradeFirstBimester)
        console.log(`First bimester mean: ${firstBimesterMean}`);

        var firstGradeSecondBimester =  gets.questionInt("Type your first grade of your second bimester: ")
        questionDataType(firstGradeSecondBimester);
        if(questionDataType(secondGradeFirstBimester) == false){
            break
        }
        var secondGradeSecondBimester = gets.questionInt("Type your second grade of your second bimester: ")
        questionDataType(secondGradeSecondBimester);
        if(questionDataType(secondGradeFirstBimester) == false){
            break
        }
        var secondBimesterMean = arithmeticMean(firstGradeSecondBimester,secondGradeSecondBimester)
        console.log(`Second bimester mean: ${secondBimesterMean}`);
        console.log(`Semester mean: ${arithmeticMean(firstBimesterMean,secondBimesterMean)}`)
        i = i + 1;
    }
}

semesterGrade()
