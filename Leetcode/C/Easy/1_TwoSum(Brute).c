#include <stdlib.h>
#include <stdio.h>
/*
Note: The returned array must be malloced, assume caller calls free().
*/

/*
At first, I use Brute Method to implement this question, and the Time Complexity is O(n^2) because 
the program will search for the char one-by-one to ensure the target is satisfied.
*/

/*
I will attempt to use hash table to implement this in the future, however, the C doesn't provide 
function to help programmer to perform it, I will have to write it myself.
*/

int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    int i, j;
    //Since only two indices of the numberse are required, set the returnSize to be 2.
    *returnSize = 2;
    //malloc the space for a new Array.
    int* returnArray = (int *) malloc((*returnSize)* sizeof(int));

    for(i = 0; i < numsSize -1; i++){
        for(j = i+1; j < numsSize; j++){
            if((nums[i]+nums[j]) == target){
                returnArray[0] = i;
                returnArray[1] = j;
                return returnArray;
            }
        }
    }
    /*Initiallize the Array*/
    returnArray[0] = -1;
    returnArray[1] = -1;
    return returnArray;
}



