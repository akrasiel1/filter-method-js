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

// In the example below, we have an array of objects called countries.
const countries = [
    {name: 'Italy', continent: 'Europe', speaksEnglish: false},
    {name: 'Australia', continent: 'Oceania', speaksEnglish: true},
    {name: 'Japan', continent: 'Asia', speaksEnglish: false},
    {name: 'Gabon', continent: 'Africa', speaksEnglish: false},
    {name: 'China', continent: 'Asia', speaksEnglish: false},
    {name: 'Chile', continent: 'South America', speaksEnglish: false},
    {name: 'Vietnam', continent: 'Asia', speaksEnglish: false},
    {name: 'Spain', continent: 'Europe', speaksEnglish: false},
    {name: 'USA', continent: 'North America', speaksEnglish: true},
    {name: 'Panama', continent: 'Central America', speaksEnglish: false},
    {name: 'Nigeria', continent: 'Africa', speaksEnglish: true},
    {name: 'Montenegro', continent: 'Europe', speaksEnglish: false},
    {name: 'New Zealand', continent: 'Oceania', speaksEnglish: true},
    {name: 'Costa Rica', continent: 'Central America', speaksEnglish: false},
    {name: 'Ethiopia', continent: 'Africa', speaksEnglish: false},
    {name: 'Hungary', continent: 'Europe', speaksEnglish: false},
    {name: 'Kazakhstan', continent: 'Asia', speaksEnglish: true},
    {name: 'Mexico', continent: 'North America', speaksEnglish: false},
    {name: 'Chile', continent: 'South America', speaksEnglish: false},
    {name: 'South Africa', continent: 'Africa', speaksEnglish: true},
    {name: 'Australia', continent: 'Oceania', speaksEnglish: true},
    {name: 'United Kingdom', continent: 'Europe', speaksEnglish: true},
];
// We want to create a new array in which we filter out all the English speaking countries
// ES5 code version

//const nonEnglish = countries.filter(function(country) {
    //return !country.speaksEnglish
//})

// As country.speakEnglish is implicitly expected the return true, we have to use the
// logical NOT operator (!) to reverse to false

// ES6 version
const nonEnglish = countries.filter(country => !country.speaksEnglish);


console.log(nonEnglish);
