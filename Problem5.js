/** 
*    Euler Project - Problem 5   
*    Smallest Multiple
*    @author Joshwyn Parekh
*/

var num = 1;
var final = 0;

while (true)
{
    for (let i = 1; i < 21; i++)
    {
        if (num % i != 0) {
            break;
        }
        if (i == 20)
        {
            final = num;
        }
    }
    if (final != 0) {break;}
    num++;
}

console.log(final);