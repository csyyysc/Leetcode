#include <stdio.h>
#include <stdlib.h>

/*
In fact, I am not pretty familiar with dealing strings. It is much easier for me to solve math problems. Therefore, it is a good chance
to know how to do such a basic computation, "Binary Adder". This reminds me of the travel that I went to Kyoto University with my friends, 
and see a complex adder which was honored with Nobel Prize.
*/



char* addBinary(char* a, char* b)
{
    //Use two variables to store the length of each char.
    int len_a = strlen(a);
    int len_b = strlen(b);
    //To know when to carry.
    int carry = 0;
    /*First try if-else condition to know if there is empty char.
    if(len_a == 0) 
        return b;
    else if(len_b == 0)
        return a;
    else 
        return NULL;
    */
    //Below is a better way to write this condition.
    int len_return = len_a > len_b ? len_a : len_b; 
    //Ensure the result would have enough space, the memory should be allocated two more space.
    char* result = (char*)calloc(len_return+2, sizeof(char));
    //After knowing the max length, be sure to have the last index store the terminate sign
    result[len_return+1] ='\0';
    //Below refer to https://www.52coder.net/post/LeetCode67
    len_a = len_a -1;
    len_b = len_b -1;
    while(len_a >= 0 || len_b >= 0)
    {
        int res_a = len_a >= 0 ? a[len_a--] - '0' : 0;
        int res_b = len_b >= 0 ? b[len_b--] - '0' : 0;
        // What does ^ menas here?　I have to look up my C program manual. 
        // Bitwise exclusive or....
        int res = res_a ^ res_b ^ carry;
        carry = (res_a + res_b + carry > 1) ? 1 : 0;
        result[len_return--] = res + '0';
    }
    
    //In no carry circumstance.
    if(!carry)
        return result + 1;
    //In carry circumstance.
    //If carry the index[0] should be 1.
    result[0] = '1';
    return result;
}