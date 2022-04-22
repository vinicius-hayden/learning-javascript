// Create a program that takes a letter and shows whether it is a vowel or a consonant.

function vowelOrConsonant(letter){
    const letterInput = letter.toLowerCase()
    if(typeof(letter) != 'string') {
        console.log("Invalid Input, please type a string")
        return
    }
    else if(letter.length > 1) {
        console.log("Invalid Input, should contain only one letter")
        return
    }
    else if(letterInput != 'a'&& letterInput != 'e'&& letterInput != 'i'&& letterInput != 'o'&& letterInput != 'u'){
        console.log('Consonant')
    }
    else {
        console.log("Vowel")
    }

}

vowelOrConsonant("H")