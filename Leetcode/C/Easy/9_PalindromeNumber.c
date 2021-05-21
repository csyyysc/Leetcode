#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool isPalindrome(int x)
{
     long reverse = 0;
     int compare = x;

     if(x < 0) 
     { 
         return false;
     }
     while(x != 0)
     {
         int popin = x % 10;
         x = x / 10;
         reverse = reverse*10 + popin;
     }
     if(reverse == compare) 
        return true;
     else 
        return false;
}
