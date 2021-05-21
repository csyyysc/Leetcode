#include <stdio.h>
#include <stdlib.h>


/*Below is one of solution, but I think it is a little bit weird, if just return "top", 
and actually I first thought I was supposed to return the revised array "nums", however, 
the test cases only return array in the first test... and the rest of the cases seems only
return int. Anyway, maybe I will face the question I thought in the earlier in the future.*/
int removeDuplicates(int *nums, int numsSize)
{ 
    if(numsSize == 0)
        return 0;

    int i;
    int top = 1;
    for(i = 1; i < numsSize; i++)
    {
        if(nums[i] != nums[i-1])
            nums[top++] = nums[i];
    }
    return top;
}