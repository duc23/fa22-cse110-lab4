### Data Types

- 12. Arithmetic:
    - a) alert(student.name);
    - b) alert(student["Grad Year"]);
    - c) student.greeting()
    - d) alert(student["Teacher"].name);
    - e) alert(student.courseLoad[0]);

- 13. Comparison:
    - a) '32'. This output was given because the interpreter converts the number to a string and concatenates both together.
    - b) 1. This output was given because the string, '3', converts to into a number and then the subtraction takes place. 
    - c) 3. This output was given because null becomes 0 in numeric conversion. 
    - d) '3null'. This output was given because the null value converts to a string and is concatenated to the string 3. 
    - e) 4. This output was given because true maps to 1 and 1 + 3 = 4. 
    - f) 0. This output was given because false and null both map to 0, and 0+0=0. 
    - g) '3undefined'. This output was given because the undefined value converts to a string and is concatenated to the string 3.
    - h) NaN. This output was given because the string, '3, converts into a number and undefined is NaN as a number. So 3 - NaN is NaN because you cannot subtract by NaN. 

- 14. Comparison:
    - a) True because when comparing values of different types, Javascript converts the values to numbers so string '2' becomes a number 2. 
    - b) False because for string comparison the first character of each string is compared to each other and so 2 is not less than 1, thus returns false. 
    - c) True because string '2' becomes the number 2, so 2 does equal to 2. 
    - d) False because the strict equality operator returns false if the two things being compared are of different types. 
    - e) False because true is converted to 1 and 1 does not equal to 2. 
    - f) True because Boolean(2) returns true and since both are of the same Boolean type (true), the strict equality operator returns true for the whole comparison. 


15. The == is a comparison operator which does the type conversion of the operands before comparison. The === is a strict equality comparison operator which compares the value and data types of the operands and if their type is different it returns false. 

17. The result will be an array of [2, 4, 6]. I arrived at this result because the function doSomething only runs when the "i" is less than length of the array (which is 3). So for three iterations, the function doSomething will run and add the new value to the end of newArr by using the input array [1, 2, 3].  

19. 1
    4
    3
    2