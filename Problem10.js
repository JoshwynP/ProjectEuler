/** 
*    Euler Project - Problem 10   
*    Summation of Primes
*    @author Joshwyn Parekh
*/

var sum  = 5;
var prime = 5;
var isPrime;

while (prime < 2000000) {
    isPrime = true;
    if (prime%3 == 0) {prime +=2;}
    else {
        for (let i = 4; i < prime; i++) {
            if (prime%i == 0) {
                prime+=2;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {sum += prime;}
        prime+=2;
    }
}

console.log(sum);