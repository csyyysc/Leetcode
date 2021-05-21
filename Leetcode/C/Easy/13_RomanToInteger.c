#include <stdio.h>
#include <stdlib.h>
/*Declare the function of toNums() here. I made a mistake that I put this function below the romanToInt() function, and 
this caused the program failed to execute.  So, to declare the function before write it down might help to make myself think
more accurate and carefully.*/
int toNums(char rm);

int toNums(char rm)
{
    switch(rm)
    {
        /*Be careful to use the single quote instead of using double quote which definitely fails.*/
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
    }
    /*Also, remember to return 0 in case of passing an empty char.*/
    return 0;
}

int romanToInt(char* s)
{
    /*
    I am not certain why I have to create one more char pointer to be assigned with char pointer parameter s.
    After my test, I found that if I don't use a new point to store the parameter one, if might spend more 
    time on doing the comparison. However, the test case only include 4000 test cases, my conclusion might be
    too early. Anyone, it is a good time to consider the use of pointers in C.
    */
    char* p = s;
    int i = 0, cmp1 = 0, cmp2 = 0;
    int sum = 0;
    /*'\0' tells the program that it has not reached to the end of line.*/
    while(p[i] != '\0')
    {
        cmp1 = toNums(p[i]);
        cmp2 = toNums(p[i+1]);
        if(cmp1 < cmp2){
            sum = sum + cmp2 - cmp1;
            i = i + 2;
        }else{
            sum = sum + cmp1;
            i = i+1;
        }
    }
    return sum;
}