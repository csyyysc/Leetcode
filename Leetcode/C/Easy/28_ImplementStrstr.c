#include <stdio.h>
#include <stdlib.h>

int strStr(char* haystack, char* needle)
{
    int h_len = strlen(haystack);
    int n_len = strlen(needle);
    
    /*
    If the needle is an empty string, return 0. This is because we want the results to be consistent with C's strStr() funcion.
    */
    if(n_len == 0)
        return 0;
    /*If h_len is less than n_len means that n_len is not part of string haystack.*/
    if(h_len < n_len)
        return -1;

    for(int i = 0; i < h_len; i++)
    {
        int j = i;
        int k = 0;
        /*Taking haystack = "hello" and needle = "ll"
        haystack[2] == needle[0] -> l and l
        j = j + 1 -> 3 && k = k + 1 -> 1
        haystack[3] == needle[1] -> l and l
        j = j + 1 -> 4 && k = k + 1 -> 2 
        */
        while(haystack[j] == needle[k] && k < n_len)
        {
            j++;
            k++;
        }

        if(k == n_len)
            return i;
    }
    return -1;
}

/*
Below is a faster way to implement it.

for(int i = 0; i < h_len - n_len + 1; i++)
{
    for(int j = 0 ; j < n_len; j++)
    {
        if(haystack[i+j] != needle[j])
            break;
        if(j == n-1)
            return i;
    }
}
return -1;

*/