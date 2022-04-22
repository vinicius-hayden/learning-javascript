//A program to manage withdrawals from an ATM must have some mechanism to decide the number of notes of each value 
//that must be made available to the customer who made the withdrawal. A possible criterion would be the 
//"optimal distribution" in the sense that the lowest value notes were distributed in the minimum possible number. 
//For example, if the requested amount was BRL 87.00, the program would indicate one BRL 50.00 bill, three BRL 10.00 bills, 
///one BRL 5.00 bill and two BRL bills. 1.00 Write a program that receives the amount of the requested amount and 
// returns the distribution of the grades according to the optimal distribution criterion 
//(assume that there are bills of R$1.00; R$2.00; R$5.00; R$10.00; R$ $20.00; R$50.00 and R$100.00).


function idealWithdraw(withdrawl){
    let withdrawlWithValues = [];
    while(withdrawl != 0){
        if(withdrawl >= 100){   
            withdrawlWithValues.push(`${parseInt(withdrawl/100)} de 100`);
            withdrawl = withdrawl - 100;
        }
        else if(withdrawl >= 50){   
            withdrawlWithValues.push(`${parseInt(withdrawl/50)} de 50`);
            withdrawl = withdrawl - 50;
        }
        else if(withdrawl >= 20){   
            withdrawlWithValues.push(`${parseInt(withdrawl/20)} de 20`);
            withdrawl = withdrawl - 20;
        }
        else if(withdrawl >= 10){   
            withdrawlWithValues.push(`${parseInt(withdrawl/10)} de 10`);
            withdrawl = withdrawl - 10;
        }
        else if(withdrawl >= 5){   
            withdrawlWithValues.push(`${parseInt(withdrawl/5)} de 5`);
            withdrawl = withdrawl - 5;
        }
        else if(withdrawl >= 2){   
            withdrawlWithValues.push(`${parseInt(withdrawl/2)} de 2`);
            withdrawl = withdrawl - 2;
        }
        else if(withdrawl >= 1){   
            withdrawlWithValues.push(`${parseInt(withdrawl/1)} de 1`);
            withdrawl = withdrawl - 1;
        }
    }
    return withdrawlWithValues;
}

console.log(idealWithdraw(87))