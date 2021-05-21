/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
*/

/*

Example:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

/*

I implement this program in c and utilize two pointers to exchange the position of the char* s. 


*/

void reverseString(char *s, int sSize){
	int i;
	char *begin_str, *end_str;
	char ch;

	begin_str = s;
	end_str = s;

	for(i = 0; i < sSize - 1; i++) 
	    end_str++;

	for(i = 0; i < sSize/2; i++){
		ch = *end_str;
		*end_str = *begin_str;
		*begin_str = ch;

		begin_str++;
		end_str--;
	}
}