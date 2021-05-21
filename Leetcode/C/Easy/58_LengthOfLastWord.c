#include <stdio.h>
#include <stdlib.h>
/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.
*/

int lengthOfLastWord(char* s)
{
    /*Count the numbers of the last word */
    int count = 0;
    for(int i = strlen(s) -1; i >= 0; i--)
    {
        if(*(s+i) != ' ')
            count++;
        else if(*(s+i) == ' ' && count)
            break;
    }
    return count;
}