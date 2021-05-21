#include <stdio.h>
#include <stdlib.h>
#include <limits.h> 

int reverse(int x)
{
    int Result = 0;
    /*
    This method will cause problem when we write test units.
    For example, if there is a number, say 1534236469, you will see a Runtime Error as the integer is overflow, the program would 
    not execute normally.
    while(x) 
    {
        int compare = Result;
        Result = Result*10 + x % 10;
        if((Result-x%10)/10 != compare)
        {
            return 0;
        }
        x = x / 10;
    }
    return Result;
    */
   /*Below is the method I refer to some explanation on solution and revise my code*/
   while(x)
   {
       int popin = x % 10;
       x = x / 10;
       if(Result > INT_MAX/10 || (Result == INT_MAX/10 && popin > 7 ))
          return 0;
       if(Result < INT_MIN/10 || (Result == INT_MIN/10 && popin < -8))
          return 0;
       Result = Result*10 + popin;
   }
   return Result;
}