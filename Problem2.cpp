/** 
*    Euler Project - Problem 2
*    Even Fibonacci Numbers
*    @author Joshwyn Parekh
*/

#include <iostream>
using namespace std;

int main()
{
    int i = 1;
    int j = 2;
    int k = 0;
    int sum = 2;

    while (j <= 4000000){
        k = i + j;
        //cout << k << ", " ;
        if (k % 2 == 0){
            sum += k;
        }
        i = j;
        j = k;
    }

    cout << sum;
}