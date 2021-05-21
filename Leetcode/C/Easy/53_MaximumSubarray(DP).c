#include <stdio.h>
#include <stdlib.h>

/*
int maxSubArray(int* nums, int numsSize){
  int i, j;
  int max = nums[0];
  int sum = 0;
  
  for(i = 1 ; i < numsSize; i++)
  {
    nums[i] = nums[i] + nums[i-1];
    if(nums[i] > max)
      max = nums[i];
  }

  
  for(i = 0; i < numsSize; i++)
  {
    for(j = i+1; j <numsSize; j++)
    {
      if(nums[j] - nums[i] > max)
          max = nums[j] - nums[i];
    }
  }
  return max;
}*/


/*
Dynamic Programming is a concept to take the original problem into several similar sub-problems, and 
find the optimization of the sub-problems in order to solve the bigger problem. 
*/

int maxSubArray(int* nums, int numsSize)
{
    int i = 0, sum = 0;
    int max = nums[0];
    for(i = 0; i < numsSize; i++)
    {
        sum = sum + nums[i];
        if(max < sum)
            max = sum;
        if(sum < 0)
            sum = 0;
    }
    return max;
}