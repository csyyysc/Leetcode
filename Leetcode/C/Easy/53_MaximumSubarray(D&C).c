#include <stdio.h>
#include <stdlib.h>
#define max(a, b) (a > b ? a : b)
#define min(a, b) (a < b ? b : a)

/*
Divide and Conquer basically works by recursively breaking down a problem into several
problems, for example, we could implement D&C on Tower of Hanoi, Fibonacci and so on.

*/

/*write a structure in order to breaking down the problem into sub-problems.*/
struct storeValues {
    int left;
    int right;
    int max;
    int sum;
};

/*Here write down a function of a structure...*/

/*I refer this code in this website https://www.itread01.com/content/1545910084.html.
So far, I could not really comprehend the meaning of the codes below, but this is still
a great chance for me to understand the baisc concept of Divide and Conquer. 
*/
struct storeValues maxS(int * nums, int n)
{
    if(n == 1){
        struct storeValues t = {nums[0], nums[0], nums[0], nums[0]};
        return t;
    }
    struct storeValues val1 = maxS(nums, n/2);
    struct storeValues val2 = maxS(nums+n/2, n-n/2);
    int left = max(val1.left, val1.sum + val2.left);
    int max = max(max(val1.max, val2.max), val1.right, val2.left);
    int right = max(val2.right, val1.right + val2.sum);
    int sum = val1.sum + val2.sum;
    struct storeValues t = {left, max, right, sum};
    return t;
}



int maxSubArray(int* nums, int numsSize)
{
    struct val resultVal = maxS(nums, numsSize);
    return resultVal.max;
}