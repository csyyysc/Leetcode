#include <stdio.h>
#include <stdlib.h>

int searchInsert(int* nums, int numsSize, int target)
{
    int left = 0;
    int right = numsSize - 1;
    int mid = 0;

    while(left <= right) 
    {
        mid = (left + right) /2;
        if(nums[mid] == target) 
            return mid;
        else if(nums[mid] > target)
            right = mid - 1;
        else 
            left = mid + 1; 
    }
    return left;
}