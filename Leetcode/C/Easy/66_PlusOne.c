#include <stdio.h>
#include <stdlib.h>

/*If you can’t give up on what you love, you must work harder to let others understand.*/

/*Refer to https://www.twblogs.net/a/5c25f924bd9eee16b3db85a1*/
/*The url below also provides a good insight regarding this question 
https://www.itread01.com/content/1548431852.html
*/

/*As a matter of fact, I still not really understand why the last flag if-else condition 
should set returnArray[0] = 1. What if the array is [2,3,9], it would not making sense if 
I set returnArray[0] into 1, LoL.*/

/*
This question is mainly discussed on whether to round-up the figures in an array. 
Below, check if the digits is an empty array or not, and then set the returnArray to be NULL;
In the following, 
*/

int* plushOne(int* digits, int digitsSize, int* returnSize)
{
    if(digitsSize == 0 )
        return NULL;
    /*returnArray to store result array.*/
    int* returnArray = NULL;
    /*flag is used to decide if the previous digits has  been checked to round-up.*/
    int i, flag = 0, t = 0;
    *returnSize = digitsSize;
    /*Start to check from the last digit of the array, which might be the fastest way to determine
    if to round-up the digits.*/
    t = digits[digitsSize - 1] + 1 + flag;
    if(t >= 10) {
        digits[digitsSize-1] = t - 10;
        flag = 1;
    }
    else {
        digits[digitsSize - 1] = t;
        flag = 0;
    }
    /*After knowing the last digits, start to loop the following array in order to 
    know if the rest digits should be round-up or not. Similarly, we loop from the index[-1] to 
    index[0]. Note: index[-1] means the last element in the array.
    */
    for(i = digitsSize - 2; i >= 0; i--)
    {
        t = digits[i] + flag;
        if( t >= 10){
            digits[i] = t - 10;
            flag = 1;
        } else {
            digits[i] = t;
            flag = 0;
            break;
        }
    }
    /*If flag is equal to 1 indicated that the size of the returnArray should be 1 larger 
    than the one we declare above.*/
    if(flag == 1){
        //malloc one more space to returnArray here
        returnArray = (int*)malloc((digitsSize+1)*sizeof(int));
        //Ensure if there is only one digit, say [9], the index[0] should be 1. 
        returnArray[0] = 1;
        /*
        memcpy(void *str1, const void *str2, size_t n) is used to copy n continuous data to 
        *str1 address which is the start address, and str2 is the data to be copied.
        */
        memcpy(returnArray+1, digits, digitsSize*sizeof(int));
        (*returnSize)++;
    } else {
        returnArray = (int*)malloc(digitsSize*sizeof(int));
        memcpy(returnArray, digits, digitsSize*sizeof(int));
    }
    return returnArray;
}