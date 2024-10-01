/** 
*    Euler Project - Problem 3   
*    Largest Prime Factor
*    @author Joshwyn Parekh
*/

function multiply(a, b) {
    return a * b;
}

function Prime(a){
    for (let i = 2; i <= Math.sqrt(a); i++){
        if (a % i == 0)
        {
            return false;
        }
    }
    return true;
}

var num = 600851475143;

for (let i = Math.floor(Math.sqrt(num)); i > 0; i--) {
    if (num % i == 0){
        if (Prime(i)){
            console.log(i);
            break;
        }
    }
}

// console.log(multiply(1,5));
// console.log(multiply(50,85))

// console.log("joshwyn".toUpperCase())
