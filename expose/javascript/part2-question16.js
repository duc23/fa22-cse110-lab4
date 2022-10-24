// Given the above Object, write a for...in loop that will
// iterate through it and print out the value of the property
// if the property starts with the letter r, or if the value 
// of that property is an odd number.


for (const cars in statistics) {
    if ((cars.charAt(0) == "r") || (statistics[cars] & 1)) {
      console.log(`${cars}: ${statistics[cars]}`);
    }
}