#include <stdio.h>
#include <stdlib.h>

/*Compute and return the square root of x, where x is guaranteed to be a non-negative integer.*/
/*There is a great method named "Newton Iteration Method"
Refer to here https://www.cnblogs.com/AnnieKim/archive/2013/04/18/3028607.html
*/

int mySqrt(int x)
{
    /*Test if x is negative or less than two.*/
    if(x < 0)
        return NULL;
    else if(x == 0 || x == 1)
        return x;
    
    /*Two variable to set the divisor that we want.*/
    int l = 1, r = x/2;
    while(l < r)
    {
        /*Use bisection method to approach a reasonable divisor.*/
        int mid = l + (r-l)/2;
        
        if(mid == x/mid)
            return mid;
        else if(mid < x/mid)
             l = mid + 1;
        else 
             r = mid - 1;
        /*
        Also, it could be written as followed:
        int t = mid * mid;
        if(t == x)
            return mid;
        else if(t > x)
            r = mid - 1;
        else 
            l = mid + 1;
        */
    }

    /*Newton Iteration
    int sqrt(int x)
    {
        if(x == 0) 
            return 0;
        double last = 0;
        double result = 1;
        while(result != last)
        {
            last = result;
            result = (result + x/result)/2;
        }
    }

    */
    return l - 1;
}