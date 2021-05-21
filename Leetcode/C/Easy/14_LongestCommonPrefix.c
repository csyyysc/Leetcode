#include <stdio.h>
#include <stdlib.h>

/*Compare the string within the array. The easiest way to solve this question is to set 
the first string of the original array as our target, and in the following scan each string 
of the rest strings to compare with first string. If there is no common prefix, return "" directly.*/

char* longestCommonPrefix(char ** strs, int strsSize)
{
    int i, j;
    /*Because we pass second-pointer into the function. It could be seen as a two-dimensional set.*/
    if(strsSize == 0)
        return "";
    char* str = strs[0];
    for(i = 1; i < strsSize; i++)
    {
        /*j specify the string to compare, for instance, str[0] is first set as flower, and compare with second string
        flow and compare with each char like, f,l,o,w.*/
        
        j = 0;
        /*str[0] -> "flower" strs[1][0] -> "f"*/
        while(str[j] && strs[i][j] && str[j]==strs[i][j])
        {
            j++;
        }
        
        str[j] ='\0';
    }
    return str;
}