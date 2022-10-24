### Part 1. A Quick Introduction...
1) values added:  20
2) final result:  20
3) values added:  20
4) The code returns an error because the variable "result" isn't defined outside of the "if" statement scope since the "let" keyword is used on line 5.
5) The codes returns an error because line 6 already assigned "result" to 0, and with a const keyword, you cannot reassign the value.
6) Similar to part 4, this code returns an error because the scope block to initialize "result" is within the "if" statement and since it isn't defined outside of it, it cannot return the value.


### Part 2. A Little More of a Challenge...

1) This line will return 3 because it tracks the index of the "i" variable which starts from 0 and executes the "for" loop based on the length of "prices." Since the length of the "prices" is 3, the "i" will increment to 3 and then stops because 3 is not less than 3 ("prices.length"). 
2) This line will return 150 because since the for loop run three times and discountedPrice is a var type, its value (from line 7) will change each iteration from 50 to 100 to 150 
3) This line will return 150 because similar to part 2, line 8 will execute three times in the "for" loop changing from 0 to 50 to 100 to 150 for each iteration. 
4) The function will return an array containing the values [50, 100, 150] since the push() method adds new items to the end of an array in "discounted." And after the for loop runs for three times, the values from "finalPrice" that are added into that array is 50, then 100, and finally 150.
5) The code causes an error because the variable "i" isn't accessible outside of the for loop since it uses a "let" keyword. Additionally, "i" isn't defined elsewhere outside of that scope, therefore, produces an error since it doesn't exist. 
6) Similar to part 5, this code also causes an error because "discountedPrice" is not defined outside of the for loop since the "let" keyword is being used on line 7. Since it is also not defined elsewhere outside the for loop, it cannot be accessed and thus produces the error. 
7) This line will return 150 because the variable "finalPrice" is declared inside the same block scope that it is being called to output the message. Therefore, for each iteration of the for loop, the value of finalPrice will change from 0 to 50, then to 100, and finally to 150. However, if line 14 is to be put after the function definition (i.e. on line 18), then the code causes an error because the variable finalPrice is outside of the scope. 
8) The function will return an array containing the values [50, 100, 150] because like part 4, after each iteration of the for loop the value of "finalPrice" will be updated and will be pushed to the end of the array beginning from 50, then 100, and finally 150. Additionally, "discounted" is declared inside the same scope as it is returned, so it will return the expected array. 
9) Similar to part 5, the code causes an error because the variable "i" isn't accessible outside of the for loop since it uses a "let" keyword. Since line 11 cannot access "i" outside of the loop and it isn't defined elsewhere, it outputs an error. 
10) The line will output 3 because the constant "length" will return  the number of elements in the array, which in this case is 3. And since the variable is defined within the same scope as it is being called to output, it will show 3 as the output message. 
11) The function will return an array containing the values [50, 100, 150] because the for loop will run 3 times and for each iteration will add the "discountedPrice" to the "discounted" array starting with 50, then 100, and finally 150. 