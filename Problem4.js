/** 
*    Euler Project - Problem 4   
*    Largest Palindrome Product
*    @author Joshwyn Parekh
*/

var num1 = 999;
var num2 = 999;
var largest = 0;

function Palindrome(textnum){
    let stringArray = textnum.split("");
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");

    // console.log(textnum, reversedString);
    
    if (textnum == reversedString){
        return true;
    }
    return false;
}

while (true){
    let num3 = num1 * num2;
    let textNum = num3.toString();
    if (Palindrome(textNum))
    {
        if (num3 > largest){
            largest = num3;
        }
    }
    if (num2 == 1)
    {
        if (num1 == 1) {break;}
        num1--;
        num2 = 999;
    }
    else{
        num2--;
    }

}

console.log(largest);