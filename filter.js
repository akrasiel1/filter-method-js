// ARRAY METHODS - filter()
// The filter() method takes an array and evaluate each item against a test.
const scores = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
// The filter() method is non destructive, meaning that it won't alter the original array
// First, we declare a new variable then apply the filter() method to the original array
// Then we pass in a callback function, which takes the current value as a parameter (number)
const filterFive = scores.filter(number => number % 2);
// Above, we want to rerutn a new array by filtering out all the numbers that are divisible by 2, 
// hence leaving us with an array of numbers ending in 5. As 5 % 2 = 1, the first iteration will pass as true.
// Following that we evaluate 10 % 2 = 0, which will evaluate as false, etc.

console.log(filterFive);