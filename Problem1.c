/** 
*    Euler Project - Problem 1
*    Multiples of 3 or 5
*    @author Joshwyn Parekh
*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int sum = 0;
    
    for (int i = 0; i < 1000; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    printf("sum = %d\n", sum);
}

