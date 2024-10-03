/** 
*    Euler Project - Problem 10   
*    Summation of Primes
*    @author Joshwyn Parekh
*/

var sum  = 2;
var prime = 3

while (prime < 2000000) {
    if (prime%3 == 0) {prime +=2;}
    else {
        for (let i = 3; i < prime; i++) {
            if (prime%i == 0) {
                prime+=2;
                break;
            }
        }
    }
}




console.log(sum);