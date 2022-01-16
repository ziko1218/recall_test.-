/*
function reverse(n, arr) {
    //
   
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
      result.push(arr[i]);
    };
    console.log(result.join(' '));
  }
  reverse(3, [10, 20, 30, 40]);

  //=======================================
                                                    
  function inPlace(array) {
for ( let i = 0; i < (array.length - 1) / 2 ; i ++) {
  let k = (array.length - 1) - i;
  let temp = array[i];
  array[i] = array[k];
  array[k] = temp;
}                                              
  }
  inPlace(['a','b','c','d','e'])

  

//==========================================

function equal(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
      //add to sum
      sum += Number(arr1[i]);
    } else {
      console.log(`Arrays are not identical.Found difference at ${i}`);
      return;
    }
  }
  console.log(`Arrays are identical.Sum: ${sum}`);
}
inPlace(["10", "20", "30"], ["10", "20", "30"]);

//=====================================================

function addSubtract (arr) {
let oldSum = 0;
let newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    let newNumber = 0;
    if (currentNumber % 2 === 0) {
      // even
      newNumber = currentNumber + i;
      arr[i] = newNumber;

    } else {
      newNumber = currentNumber - i;
      arr[i] = newNumber;
      //odd
    }
    oldSum += currentNumber;
    newSum += newNumber;
  } 
  console.log(arr);
  console.log(oldSum);
  console.log(newSum);
}
addSubtract([5,15,23,56,35])

//============================================ 

function compareEl(arr1,arr2) {

  for (let i = 0; i < arr1.length; i++) {
    let firstListEl = arr1[i];
    for (j = 0; j < arr2.length;j++) {
      let secondListEl = arr2[j];
      if (firstListEl === secondListEl) {
        console.log(firstListEl);
      }
    }
  }
}
compareEl (['Hey', 'hello', 2, 4, 'Peter', 'e'],
           ['Petar', 10, 'hey', 4, 'hello', '2'])

//===============================================

function mergeArrays(arr1, arr2) {
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let firstListEl = arr1[i];
    let secondListEl = arr2[i];

    if (i % 2 === 0) {
      let sum = Number(firstListEl) + Number(secondListEl);
      resultArr.push(sum);
    } else {
let result = firstListEl + secondListEl;
resultArr.push(result);
    }
  }
console.log(resultArr.join(' - '));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);


//=============================================



function rotation(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let firstListEl = arr[0];
    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    let lastIndex = arr.length - 1;
    arr[lastIndex] = firstListEl;
  }
  console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);

//==============================================


function maxNum(arr) {
  let topIntegers = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let isTop = true;
    for (let j = i + 1; j < arr.length; j++) {
      let neighbourNumber = arr[j];
      if (neighbourNumber >= currentNum) {
        isTop = false;
        break;
      }
    }
    if(isTop){
      topIntegers.push(currentNum);
    }
  }
  console.log(topIntegers.join(' '));
}
maxNum([1, 4, 3, 2]);


//============================================================

function equalSum(arr) {
  let hasFoundResult = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // calculating leftSum
    for (let leftIndex = 0; leftIndex < i; leftIndex++) {
      leftSum += arr[leftIndex];
    }
    // calculation rightSum
    for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
      rightSum += arr[rightIndex];
    }
    if (leftSum === rightSum) {
      hasFoundResult = true;
      console.log(i);
      break;
    }
  }
  if (!hasFoundResult) {
    console.log("no");
  }
}
equalSum([1, 2, 3, 3]);

//=====================================================================


function power(x, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  console.log(result);
}
power(2, 8);

//============================================


function printCertificate(grade, names) {
  if (pass(grade)) {
    printHeader();
    printName(names);
    printGrade(grade);
  } else {
    console.log(`${names[0]} ${names[1]} does not pass `);
  }

  function printHeader() {
    console.log("~~~~~~~~~~~~~~~~~{@}~~~~~~~~~~~~~~~~");
    console.log("~~~~~~~~~~~~  Certificate ~~~~~~~~~~");
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  }

  function printName(name) {
    console.log("         " + names[0] + " " + names[1]);
  }

  function pass(grades) {
    return grade >= 3;
  }

  function printGrade(grades) {
    let description;
    if (grade < 3) {
      description = "Poor";
    } else {
      description = "Good";
    }
    console.log("           " + `${description} (${grade})`);
  }
}
printCertificate(2, ["Ts", "Velkov"]);
printCertificate(5.5, ["Tsvetoslav", "Velkov"]);

//=============================================================

function orders(product, qty) {
  // get product price
  let price = getprice(product);
  //calculate total
  let total = price * qty;
  // print result
  console.log(total.toFixed(2));
}
function getprice(productI) {
  switch (productI) {
    case "coffee":
      return 1.5;
    case "water":
      return 1.0;
    case "coke":
      return 1.4;
    case "snacks":
      return 2;
  }
}
orders("water", 5);
orders("coffee", 2);

//============================================================


function addAndSubtract(firstNum, secondNum, thirdNum) {
 let numberSummed = sum(firstNum, secondNum);
 let numbersSubtracted = substract(numberSummed,thirdNum)
return numbersSubtracted;
}
function sum(firstNum, secondNum) {
  let result = firstNum + secondNum;
  return result;
}
function substract(firstNumber, secondNumber) {
  let result = firstNumber - secondNumber;
  return result;
}
let result = addAndSubtract(42,58,100)

console.log(result);

=========================================================


function charachtersInRange(firstCharacter, secondCharacter) {
  let min = firstCharacter.charCodeAt(0);
  let max = secondCharacter.charCodeAt(0);

  let firstCharAsNumber = firstCharacter.charCodeAt(0);
  let secondCharacterAsNumber = secondCharacter.charCodeAt(0);

  if (firstCharAsNumber > secondCharacterAsNumber) {
    min = secondCharacterAsNumber;
    max = firstCharAsNumber;
  }

  let result = "";

  for (let i = min + 1; i < max; i++) {
    let charachter = String.fromCharCode(i);
    result += charachter + " ";
  }

  return result;
}
let result = charachtersInRange("d", "a");
console.log(result);

//==================================================================

 function oddEvenSUM(number) {
  let numberAsString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let digit of numberAsString) {
    if (Number(digit) % 2 === 0) {
      evenSum += Number(digit);
    } else {
      oddSum += Number(digit);
    }
  }
  let resultString = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
  return resultString;
}
let result = oddEvenSUM(1000435);
console.log(result);



//=========================================================

function palindromme(arrNumbers) {
  for (let number of arrNumbers) {
    let numberAsString = number.toString();
    let reversedNumberAsString = numberAsString.split("").reverse().join("");

    if (numberAsString === reversedNumberAsString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromme([123, 323, 421, 121]);

//==========================================
   //PASSWORD Validator

function passwordValidator(password) {
  function isLengthBetweenSixAndTen(string) {
    if (string.length >= 6 && string.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
  function consistOnlyLettersAndDigits(string) {
    for (let char of string) {
      let charCode = char.charCodeAt(0);
      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      ) {
        return false;
      }
    }
    return true;
  }
  function hasAtleast2Digits(string) {
    let counter = 0;

    for (let char of string) {
      let charCode = char.charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        counter++;
      }
    }
    // if (counter >= 2) {
    //   return true;
    // } else {
    //   return false;
    // } OR 2nd WAY
    return counter >= 2;
  }
  let isLengthValid = isLengthBetweenSixAndTen(password);
  let containsLettersAndDigits = consistOnlyLettersAndDigits(password);
  let hasTwoDigitsAndMore = hasAtleast2Digits(password);

  if (isLengthValid && containsLettersAndDigits && hasTwoDigitsAndMore) {
    console.log(`Password is valid`);
  }
  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!containsLettersAndDigits) {
    console.log(`Password must consist only of letters and digits`);
  }
  if (!hasTwoDigitsAndMore) {
    console.log(`Password must have at least 2 digits`);
  }
}
passwordValidator("login");



//=========================================================================

function nXnMatrix(number) {
  function constructRow(n) {
    let row = '';
    for (let j =0; j < n; j++) {
      row += `${n}`
    }
    return row;
  }
    for (let i = 0; i < number; i++) {
    
    console.log(constructRow(number));
  }

}
nXnMatrix(3);


//===========================================================

function perfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i ++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    return 'We have a perfect number!';
  } else {
    return "It's not so perfect."
  }
}
let result = perfectNumber(6);
console.log(1236510);

//=================================================================


function loadinBar(n) {
  let str = "";
  let newN = n / 10;
  for (i = 0; i < 10; i++) {
    if (i < newN) {
      str += "%";
    } else {
      str += ".";
    }
  }
  if (n != 100) {
    console.log(`${n}% [${str}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`${n}% Complete!`);
    console.log(`[${str}]`);
  }
}
loadinBar(3);

//================================================

function appendPrepend(nums) {
  // variable to store result
  let result = [];
  // iterate through all input elements
  for (let num of nums) {
    if (num < 0) {
      // - negative number -> prepend to result (unshift)
      result.unshift(num);
    } else {
      // - otherwise -> append to result (push)
      result.push(num);
    }
  }
  // iterate through all result elements
  for (let num of result) {
    console.log(num);
  }
}
appendPrepend([7, -2, 8, 9]);


//=======================================================================

let myArr = [5, 8, -3, 11, 44];

console.log(myIncludes(myArr, 8));
console.log(myIndexOf(myArr, 11));
let newArr = mySlice(myArr, 1, 3);
console.log(`Original`, myArr);
console.log(`Modified, Sliced`, newArr);

let removed = myArr.splice(3, 2);
console.log("after", myArr);
console.log(removed);

function myIncludes(arr, value) {
  // iterate all elements and compare and if single elelemnt is match, return true
  for (let element of arr) {
    if (element === value) {
      return true;
    }
  }
  return false;
}
function myIndexOf(arr, value) {
  // iterate all elements and compare and if single elelemnt is match, return true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
function mySlice(arr, start, end) {
  // iterate starting at index ''start' and stopping before 'end'
  // -copy element to result
  // return result
  if (start == undefined) {
    start = 0;
  }
  if (end == undefined) {
    end = arr.length;
  }
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}
function mySplice(arr, start, count, insert) {
  // NOT COMPLETED !
  // create variable to store deleted elements
  // slice from 'start' + 'count' (removed part)
  // slice array at 'start' and store left and right parts
  //slice right part before index of deletion
  // slice from 0 to 'start' (left part
  // slice from 'start ' + 'count' to end (right part)
  // push new elements to left part
  // push all elements from right part to left part
  // return removed part
  let left = arr.slice(0, start);
  let removed = arr.slice(start, start + count);
  let right = arr.slice(start + count);

  if (insert != undefined) {
    for (let element of insert) {
      left.push(element);
    }
    for (let element of right) {
      left.push(element);
    }
  }
  return left;
}

//========================================================

function firstLast(arr) {
  // creat two variables for result
  // extract first element (shift())
  // iterate foward from 0 to K
  // iterate backwards from length - 1 to length - k

  let k = arr.shift();

  let forward = [];

  for (let i = 0; i < k; i++) {
    forward.push(arr[i]);
  }

  let backwards = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    backwards.push(arr[i]);
  }
  console.log(forward.join(" "));
  console.log(backwards.join(" "));
}
firstLast([2, 7, 8, 9]);

//=========================================================

function firstLast(arr) {
  let k = arr.shift();
let forward = arr.slice(0,k);
let backwards = arr.slice(arr.length - k)
}
firstLast([2, 7, 8, 9]);

//=========================================

function fibunacci(n,k) {
  // create variable to hold result
  let result = [1];
  // repeat n times 
  for (let i = 1; i < n; i++) {
    
    // calculate next element
    // --  slice from result k elements from the end
    // -- sum sliced elements
    // - store elelement 
    
    let current = 0;
    for (let num of result.slice(-k)) {
      current += num;
    }
    // store elelemnt
 result.push(current);
  }
 // print result
}
fibunacci(6,3) 
//===================================================

function ProcessOddNumbers(array) {
  // filter only element at odd indexes
let predicate = (x,i) => i % 2 == 1 ;
let filterred = array.filter(predicate)
  // map filtered elements and double them x = > x * 2
  let operation = x => x * 2;
  let mapped = filterred.map(operation);
  // reverse array
  mapped.reverse();
  // print
  console.log(mapped.join(" "));
}

ProcessOddNumbers([10, 15, 20, 25]);

//======================================

function trainFunction(input) {
  let train = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let maxCapacity = Number(input.shift());

  for (let command of input) {
    let tokens = command.split(" ");
    if (tokens[0] === "Add") {
      let passangers = Number(tokens[1]);
      train.push(passangers);
    } else {
      let passangers = Number(tokens[0]);
      for (let i = 0; i< train.length; i++) {
        if (train[i] + passangers <= maxCapacity) {
          train[i] += passangers;
          break;
        }
      }
    }
  }
  console.log(train.join(' '));
}
trainFunction(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

//===========================================

function distinctArray(numbers) {
  let resultArray = [];

  for (let i = 0 ; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (!resultArray.includes(currentNumber)) {
      resultArray.push(currentNumber);
    }
  }
  console.log(resultArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

//================================================

function sorting(numbers) {
  // create new array
  let sortedNumbers = [];
  let numbersLength = numbers.length;
  // iterate i until length
  for (let i = 0; i < numbersLength; i++) {
    // if i % 2 === 0
    let number;
    if (i % 2 === 0) {
      // get biggest possible,
      number = Math.max(...numbers);
    } else {
      // get smallest possible
      number = Math.min(...numbers);
    }
    //add to new,delete from old
    sortedNumbers.push(number);
    numbers.splice(numbers.indexOf(number),1);
  }
  // print result
  console.log(sortedNumbers.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

//=======================================================


function sorting2criteria(input) {
  input.sort((a, b) => {
    let firstCriteria = a.length - b.length;
    let secondCriteria = a.localeCompare(b);
    return firstCriteria || secondCriteria;
  });
  console.log(input.join('\n'));
}

sorting2criteria(["alpha", "beta", "gamma"]);

//====================================================

 
//ARRAY MANIPULATOR

function arrayManipulator(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    if (tokens[0] === "add") {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);
      numbers.splice(index, 0, element);
    } else if (tokens[0] === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);
      let numbersToAdd = tokens.map(Number);
      numbers.splice(index, 0, ...numbersToAdd);
    } else if (tokens[0] === "contains") {
      let result = numbers.indexOf(Number(tokens[1]));
      console.log(result);
    } else if (tokens[0] === "remove") {
      let index = Number(tokens[1]);
      numbers.splice(index, 1);
    } else if (tokens[0] === "shift") {
      let positions = Number(tokens[1]);
      for (let i = 0; i < positions; i++) {
        numbers.push(numbers.shift());
      }
    } else if (tokens[0] === "sumPairs") {
      let resultArr = [];
      if (numbers.length % 2 !== 0) {
        numbers.push(0);
      }
      for (let i = 0; i < numbers.length - 1; i += 2) {
        let sum = numbers[i] + numbers[i + 1];
        resultArr.push(sum);
        numbers = resultArr;
      }
    } else if (tokens[0] === "print") {
      console.log(`[ ${numbers.join(" ,")}]`);
      return;
    }
  }
}
// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"]
// );

arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);

//===================================== OBJECTS ========================
                     
let myObj = {
  "name": 'Peter', // може и имената на свойствата да са като стринг
  age: 23
}

function getValue(propName) {
  console.log(myObj[propName]);
}
getValue('age');
getValue('name');

//=======================================


function createPerson(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    sayHi: function () {
      console.log("Hello");
    },
  };
  return person;
}
let myPerson = createPerson("Peter", "Jackson", 36);
console.log(myPerson);

myPerson.sayHi();
console.log(Object.keys(myPerson));
console.log(Object.values(myPerson));
//======================================



class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

let myPerson = new Person("Ziko", "Velkov", 39);

console.log(myPerson);

//===========================================

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

let myCat = new Cat("Tom", 5);
myCat.meow();
let otherCat = new Cat("Punky", 3);
otherCat.meow();

//====================================

function solve(catAsString) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name} , age ${this.age} says Meow`);
    }
  }
  let cats = [];
  for (let catData of catAsString) {
    [nameCat, age] = catData.split(` `);
    let cat = new Cat(nameCat, age);
    cats.push(cat);
  }
  for (let cat of cats) {
    cat.meow();
  }
}
solve(["Tom 5", "Sidney 9"]);

//====================================


function employees(listOfEmployees) {
  for (let employee of listOfEmployees) {
    let employeeData = {
      name: employee,
      personalNumber: employee.length,
    };
    console.log(
      `Name: ${employeeData.name} -- Personal Number: ${employeeData["personalNumber"]}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

//================================================================================


function towns(townsArray) {
  let townsArr = [];

  for (let townInfo of townsArray) {
    let tokens = townInfo.split(' | ');

    let town = tokens[0];
    let latitude = Number(tokens[1]).toFixed(2);
    let longtitude = Number(tokens[2]).toFixed(2);

    let townData = {
      town,
      latitude,
      longtitude,
    };
    townsArr.push(townData);
  }
  console.log(townsArr);
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

//======================================================================

function storeProvision(currentStock, products) {
  let store = [];
  for (let i = 0; i < currentStock.length - 1; i += 2) {
    let product = currentStock[i];
    let quantity = Number(currentStock[i + 1]);

    let productObject = {
      product,
      quantity,
    };
    store.push(productObject);
  }
  //console.log(store);
  for (let i = 0; i < products.length - 1; i += 2) {
    let product = products[i];
    let quantity = Number(products[i + 1]);

    let productObject = {
      product,
      quantity,
    };

    let indexOfProduct = store.findIndex((x) => x.product === product);
    //console.log(indexOfProduct);
    if (indexOfProduct === -1) {
      // product doesn't exist
      store.push(productObject);
    } else {
      //product exists
      store[indexOfProduct].quantity += quantity;
    }
  }
  for (let product of store) {
    console.log(`${product.product} -> ${product.quantity}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

//=====================================================================
//  REPEAT !!!

function storeProvision(currentStock, products) {



}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

//=====================================================================



function movies(moviesArray) {
  let moviesList = [];

  for (let command of moviesArray) {
    if (command.includes("addMovie")) {
      let [_, ...movieName] = command.split(" ");
      let movieNameAsString = movieName.join(" ");
      let movieObject = {
        name: movieNameAsString,
      };
      moviesList.push(movieObject);
    } else if (command.includes(`directedBy`)) {
      let tokens = command.split(" ");
      let movieNameTokens = [];
      let directorNameTokens = [];

      for (let i = 0; i < tokens.findIndex((x) => x === "directedBy"); i++) {
        movieNameTokens.push(tokens[i]);
      }
      //console.log(movieNameTokens.join(" "));
      for (
        let i = tokens.findIndex((x) => x === "directedBy") + 1;
        i < tokens.length;
        i++
      ) {
        directorNameTokens.push(tokens[i]);
      }
      let name = movieNameTokens.join(" ");
      let director = directorNameTokens.join(" ");

      let movie = moviesList.find((x) => x.name === name);
      if (movie) {
        movie.director = director;
      }
    } else {
      let tokens = command.split(" ");
      let date = tokens.pop();
      tokens.pop();
      let name = tokens.join(" ");

      let movie = moviesList.find((x) => x.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  for (let movie of moviesList) {
    if (movie.director && movie.date && movie.name) {
     console.log(JSON.stringify(movie)); 
         }
  }
  console.log(moviesList);
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);


//==============================================

function inventory(arrHeroes) {
  let heroes = [];

  for (let heroString of arrHeroes) {
    let tokens = heroString.split(" / ");
    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2].split(", ");

    let heroData = {
      name,
      level,
      items,
    };
    heroes.push(heroData);
  }
  let sortedHeroes = heroes.sort((a,b) => a.level - b.level)
  console.log(sortedHeroes);
  for (let hero of sortedHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`Level => ${hero.level}`);
    console.log(`Items => ${hero.items.sort((a,b) => a.localeCompare(b)).join(', ')}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

//====================================================================


function  person() {
  let person = {
    name:'Tseko',
    age:38,
    hobby:'football'
  }
  
  console.log(Object.entries(person));
}
person();

//=============================


function wordsTracker(arrOfStrings) {
  let wordsToSearch = arrOfStrings.shift().split(" ");

  let wordsData = {};

  for (let word of wordsToSearch) {
    wordsData[word] = 0;
  }
  for (let word of arrOfStrings) {
    if (Object.keys(wordsData).includes(word)) {
      wordsData[word]++;
    }
  }
 let sortedWords = Object.entries(wordsData).sort((a,b) => b[1] - a[1]);
  
  for (let [key, value] of sortedWords) {
    console.log(`${key} - ${value}`);
  }
  
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

//===================================================================

function oddOccurrences(string) {
  let occurances = {};
  let listOfString = string.split(" ");

  for (let string of listOfString) {
    // set to lower case
    let stringToLower = string.toLowerCase();
    // check if string exists in occurences
    if (!Object.keys(occurances).includes(stringToLower)) {
      // if not exist -> create with count 0
      occurances[stringToLower] = 0;
      // increase count
    } else {
      occurances[stringToLower]++;
    }
  }
  let result = [];

  for (let [key, value] of Object.entries(occurances)) {
    if (value % 2 !== 1) {
      result.push(key);
    }
  }
  console.log(result.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

//==============================================

function piccolo(commands) {
  let cars = [];
  for (let command of commands) {
    let [direction, carNumber] = command.split(", ");
    if (direction === "IN") {
      if (!cars.includes(carNumber)) {
        cars.push(carNumber);
      }
    } else {
      if (cars.includes(carNumber)) {
        cars.splice(cars.indexOf(carNumber), 1);
      }
    }
  }
  let sortedCars = cars.sort((a, b) => a.localeCompare(b));
  if (sortedCars.length > 0) {
    console.log(sortedCars.join("\n"));
  } else {
    console.log(`Parking Lot is Empty`);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

//=============================================================


function partyTime(arrayOfGuests) {
  let indexOfParty = arrayOfGuests.indexOf("PARTY");
  let digitArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let vip = [];
  let regular = [];
  // adding guests
  for (let i = 0; i < indexOfParty; i++) {
    let currentGuest = arrayOfGuests[i];
    if (digitArr.includes(currentGuest[0])) {
      vip.push(currentGuest);
    } else {
      regular.push(currentGuest);
    }
  }
  // removing guests
  for (let i = indexOfParty + 1; i <= arrayOfGuests.length - 1; i++) {
    let currentGuest = arrayOfGuests[i];
    if (vip.includes(currentGuest)) {
      vip.splice(vip.indexOf(currentGuest), 1);
    } else if (regular.includes(currentGuest)) {
      regular.splice(regular.indexOf(currentGuest), 1);
    }
  }
 let totalGuestLeft = vip.length + regular.length;
 console.log(totalGuestLeft);
 
 for(let guest of vip){
   console.log(guest);    // guest.join('\n')
 }
 for(let guest of regular){
   console.log(guest);    // // guest.join('\n')
 }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

//===========================================================


function cardGame(input) {
  let symbolTopoints = { J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 };
  let players = {};
  let results = {};

  for (let command of input) {
    let tokens = command.split(": ");
    let playerName = tokens[0];
    let playerCards = tokens[1].split(", ");

    if (!Object.keys(players).includes(playerName)) {
      players[playerName] = [];
    }
    players[playerName] = players[playerName].concat(playerCards);
  }
  //console.log(players);
  // calculate Points
  for (let [playerName, playerCards] of Object.entries(players)) {
    // console.log(playerName);
    // console.log(playerCards);.
    results[playerName] = 0;
    for (let i = 0; i < playerCards.length; i++) {
      let card = playerCards[i];
      if (playerCards.indexOf(card) === i) {
        let cardAsArray = card.split("");
        let type = cardAsArray.pop();
        let power = cardAsArray.join("");
        let cardPoints = 0;

        if (Object.keys(symbolTopoints).includes(power)) {
          cardPoints = symbolTopoints[power] * symbolTopoints[type];
        } else {
          cardPoints = Number(power) * symbolTopoints[type];
        }
        results[playerName] += cardPoints;
      }
    }
  }
for (let [key,value] of Object.entries(results)) {
  console.log(`${key}: ${value}`);
}
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

//===========================================================

function travelTime(input) {
  let destinations = {};

  for (let el of input) {
    let [country, town, cost] = el.split(" > ");
    if (!Object.keys(destinations).includes(country)) {
      // country does not exist
      destinations[country] = {};
    }
    // country does not exist;
    /// town does not exist
    if (!Object.keys(destinations[country]).includes(town)) {
      destinations[country][town] = Number(cost);
    }
    /// town exists
    if (Number(cost) < destinations[country][town]) {
      destinations[country][town] = Number(cost);
    }
  }
  let sortedCountries = Object
  .entries(destinations)
  .sort((a,b)=> 
  a[0].localeCompare(b[0]) || 
  Object.values(a[1]).reduce((x,y) => x + y) -
  Object.values(b[1]).reduce((x,y) => x + y))
  
  for (let [country,towns] of sortedCountries) {
    let resultString = `${country} -> `;
    let townsAsEntries = Object.entries(towns);
  }
}
travelTime([
  [
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
  ],
]);

//===========================  TEXT PROCESING
/*
function appearances(text, word) {
  word = ` ${word} `;
  text = ` ${text} `
  let count = 0;
  let index = 0;

  let found = text.indexOf(word);

  while(found != -1){
    count++;
    index = found + 1;
    found = text.indexOf(word,index);
  }
console.log(count);
}
appearances('This is a word and it also is a sentence','is')

//=================================================

function solve(words, text) {
  text = ` ${text} `;
  // parse target words
  words = words.split(", ");

  // for each words
  for (let word of words) {
    // find asterix line with matching length and replace it
    let match = ` ${"*".repeat(word.length)} `;
    word = ` ${word} `;

    text = text.replace(match, word);
  }
  // print result
  console.log(text.trim());
}
solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

//==============================================

function solve(words, text) {
  words = words.split(", ");
  let textArray = text.split(" ");
  let result = [];

  for (let token of textArray) {
    let replaced = false;
    for (let word of words) {
      if ((token === "*".repeat(word.length))) {
        result.push(word);
        replaced = true;
      }
    }
    if (replaced === false) {
      result.push(token);
    }
  }
  console.log(result.join(" "));
}
solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
//=========================================================


function solve(text) {
  let result = [];
  // iterate all characters
  let collecting = false;
  let currentWord = "";
  for (let char of text) {
    if (collecting){
      
    } else {
      // -if character is # -> begin collecting letters, until non-letter is found
      if (char == "#") {
        collecting = true;
      }
    }
    
  }
  // -- if anything was collected, add to result
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");


//====================================================================
    //NOT Completed
function warriorQuest(arrayStrings) {
  let skillToDeciph = arrayStrings.shift();
  
  for (let line of arrayStrings) {
    let token = line.split(" ");

    if (token.includes("GladiatorStance")) {
      let upper = skillToDeciph.toUpperCase();

      console.log(upper);
    } else if (token.includes("DefensiveStance")) {
      let lower = skillToDeciph.toLowerCase();
      console.log(lower);
    } else if (token.includes("Dispel")) {
replace(skillToDeciph,token[1],token[2]);
      
    } else if (token.includes("Target")) {

    } else if (token.includes("Azeroth")) {
    } else {
      console.log("Command doesn't exist");
    }

    function replace(word,index,letter) {
      index = Number(index);
      for (let i = 0; i < word.length; i ++) {
        if (index === i) {
          //currentLetterWord = letter;
          let modifiedWord = word.replace(word[index],letter)
        //console.log(modifiedWord);
         console.log("Success!");
        } 
      }
    }
  }

  // while (command !== "For Azeroth") {
  //   switch(command) {
  //     case "GladiatorStance":
  //     break;
  //     case
  //   }
  //   command = text[index];
}

warriorQuest([
  "fr1c710n",
  "GladiatorStance",
  "DefensiveStance",
  "Dispel 2 I",
  "Dispel 4 T",
  "Target Change RICTION riction",
  "For Azeroth",
]);



//===================================================

function solve(text) {
  let result = text[0];
  let lower = text.toLocaleLowerCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] != lower[i]) {
      result += ", ";
    }
    result += text[i];
  }
  console.log(result);
  console.log(result.split(', ').join(" "));
}
solve("InTheWorldThereIsHugeClubAndThisIsCSKA");

//========================================================



function CutAndReverse(text) {
  let middle = text.length / 2;

  let first = text.substring(0,middle)
  .split('')
  .reverse()
  .join("");
  let second = text.substring(middle)
  .split('')
  .reverse()
  .join("");;

}
CutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
//=========================================================
  //NOT Completed

function herosCodeAndLogic(input) {
  let actions = {
    CastSpell:(heroes,[name,mpCost,spell]) => {
      let hero = heroes[name];
      mpCost = Number(mpCost);
      if(hero.mp >= mpCost) {
        hero.mp -= mpCost;
        console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} 35 MP}`);
      } else {
        console.log(`${name} does not have enough MP to cast ${spell}!`);
      }
    },
    TakeDamage:(hereos,[name,damage,source]) => {
      let hero = heroes[name];
      damage = Number(damage);
      hero.hp -= damage;
      if(hero.hp > 0) {

      } else {

      }
    },
    Recharge:(heroes,[name,mpAmt]) => {
      let hero = heroes[name];
      hero.mp += Number(mpAmt);
      if(hero.mp > 200) {
        hero.mp = 200;
      }
    },
    Heal: (heroes,[name,hpAmt]) => {
      let hero = heroes[name];
      hero.hp += Number(hpAmt);
      if(hero.hp > 100) {
        hero.hp = 100;
      }
    }
    
  }

  // read number of heros
  let numberHeroes = Number(input.shift());

  let heroes = {};
  
  for (let i = 0; i < numberHeroes; i++) {
  // parse each hero
  parseHero(input.shift());
  let [name,hp,mp] = input.shift().split(' ');
  heroes[name] = {
    hp:Number(hp),
    mp:Number(mp)
  }
}

  // for each command unril end
  while (input[0] != "End")
     /// - parse and execute command
let [command,...args] = input.shift().split(" - ");
let action = actions[command]
actions(heroes,args);
   // sort heroes

   //  print result

   console.log(heroes);
}
herosCodeAndLogic(
  2,
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr -50",
  "TakeDamage - Kirre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End"
);

//==============================================================

function solve(input) {
  let arena = {};
  let skillLevel = {};

  while (input[0] != "Ave Cesar") {
    let line = input.shift();
    if (line.includes("->")) {
      addGladiator(line);
    } else {
      duel(line);
    }
  }
const sorted = Object.entries(arena).sort(compareGladiators);

for (let [name,tech] of sorted) {
  let skills = Object.values(tech);
  let totalSkill = 0;
  for (let skill of skillA) {
    totalSkill += skill;
  }
  console.log(`${name}: ${totalSkill} skill`);

  let sortedTeck = Object.entries(tech).sort(compareTechnics);
  for (let [tech,value]of sortedTeck) {
    console.log(` - ${tech} <!> ${value}`);
  }
}

  function compareGladiators(a, b) {
    let skillA = Object.values((a[1]));
    let totalSkillA = 0;
    for (let skill of skillA) {
      totalSkillA += skill;
    }
    let skillB = Object.values(b[1]);
    let totalSkillB = 0;
    for (let skill of skillB) {
      totalSkillB += skill;
    }
    return (totalSkillB - totalSkillA) || a[0].localeCompare(b[0]);
  }

  function compareTechnics(a, b) {}

  function addGladiator(line) {
    let [name, tech, skill] = line.split(" -> ");
    skill = Number(skill);
    if (arena[name] == undefined) {
      arena[name] = {};
    }
    let existingSkill = arena[name][tech];
    if (existingSkill == undefined || existingSkill < skill) {
      arena[name][tech] = skill;
    }
  }
  function duel(line) {
    let [a, b] = line.split(" vs ");
    if (arena[a] != undefined && arena[b] != undefined) {
      let common = findCommonTech(arena[a], arena[b]);
      if (common != undefined) {
        let skillA = Object.values(arena[a]);
        let totalSkillA = 0;
        for (let skill of skillA) {
          totalSkillA += skill;
        }

        let skillB = Object.values(arena[b]);
        let totalSkillB = 0;
        for (let skill of skillB) {
          totalSkillB += skill;
        }
        // to do fight
        if (totalSkillA > totalSkillB) {
          delete arena[b];
        } else if (totalSkillB < totalSkillA) {
          delete arena[a];
        }
      }
    }
  }
  function findCommonTech(a, b) {
    let techA = Object.keys(a);
    let techB = Object.keys(b);
    for (let tech of techA) {
      if (techB.includes(tech)) {
        return tech;
      }
    }
    return undefined;
  }
}
// solve([
//   "Peter -> BattleCry -> 400",
//   "Alex -> PowerPunch -> 300",
//   "Stefan -> Duck -> 200",
//   "Stefan -> Tiger -> 250",
//   "Ave Cesar",
// ]);
solve([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);


//=====================================================================

function solution(input) {
  let obj = getWantedWords(input);
  
  input.slice(1).forEach((word) => {
    if (Object.keys(obj).includes(word)) {
      obj[word]++;
    }
        console.log(obj);
  })



  function getWantedWords(arr) {
    let obj = {};
    arr[0].split(" ").forEach((word) => {
      obj[word] =0;
    });
    //console.log(obj);
    return obj;
  }

}
solution(["This Sentence", "is ToPractice", "Associate Massices"]);

//================================================================


function furniture(input) {
  let pattern =
    /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)$/;
  let furniture = [];
  let total = 0;
  while (input[0] !== "Purchase") {
    let line = input.shift();
    let match = pattern.exec(line);
    if (match !== null) {
      let { name, price, quantity } = match.groups;
      price = Number(price);
      quantity = Number(quantity);
      total += price * quantity;
      furniture.push(name);
    }
  }
  //console.log(furniture, total);
  console.log(`Bought furniture:`);
  for(let item of furniture) {
    console.log(item);
  }
  console.log(`Total money spend:${total.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

//======================================================


// Не работи кода
function race(input) {
  let namePattern = /[A-Za-z]/g;
  let distancePattern = /\d/g;

  let racerNames = input.shift().split(", ");

  let racers = {};

  for (let name of racerNames) {
    racers[name] = 0;
  }

  while (input[0] !== "end of race") {
    let line = input.shift();
    let letters = line.match(namePattern);
    let numbers = line.match(distancePattern);

    let name = letters.join(" ");
    let distances = numbers.map(Number);

    let totalDistance = 0;
    for (let x of distances) {
      totalDistance += x;
    }
    if (racers[name] !== undefined) {
      racers[name] += totalDistance;
    }
    //console.log(name, totalDistance);
    let result = Object.entries(racers).sort((a,b) => b[1]- a[1]);
    if (result[0]) {
      console.log(`1st place: ' + result[0][0]`);
    }
    if (result[1]) {
      console.log(`2nd place: ' + result[1][0]`);
    }
    if (result[2]) {
      console.log(`3rd place: ' + result[2][0]`);
    }
  }
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

//================================================


function plantDiscovery(input) {
  let actions = {
    Rate: rate,
    Update: update,
    Reset: () => {},
  };
  let catalog = {};
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");
    catalog[name] = {
      rarity: Number(rarity),
      ratings: [],
      avgRating: 0,
    };
  }
  while (input[0] != "Exhibition") {
    let [command, params] = input.shift().split(": ");
    let action = actions[command];
    action(params);
    
  }
let sorted = Object.entries(catalog).sort(comparePlants);
console.log(`Plant for exhibition:`);
for (let [name,plant] of sorted) {
  console.log(`-${name};Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
}


function comparePlants(a,b) {
  let rarityA = a[1].rarity;
  let rarityB = b[1].rarity;
  let ratingA = a[1].avgRating;
  let ratingB = b[1].avgRating;
  return (rarityB - rarityA) || (ratingB - ratingA);
}
  function rate(line) {
    let [name, rating] = line.split(" - ");
    if (catalog[name] != undefined) {
      let plant = catalog[name];
      plant.ratings.push(Number(rating));
      
      let total = 0;
      for (let rating of plant.ratings) {
        total += rating;
      }
      plant.avgRating = total / plant.ratings.length;
    } else {
      console.log("error");
    }
  }

  function update(line) {
    let [name, rarity] = line.split(" - ");
    if (catalog[name] != undefined) {
      let plant = catalog[name];
      plant.rarity = Number(rarity);
    } else {
      console.log("error");
    }
  }

  function reset(name) {
    if (catalog[name] != undefined) {
      let plant = catalog[name];
      plant.ratings.length = 0;
      plant.avgRating = 0;
    } else {
      console.log("error");
    }
  }

}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);

//=======================================

function worldTravel(input) {
  let actions = {
    "Add Stop": add,
    "Remove Stop": remove,
    "Switch": swap,
  };
  // store initial string into result
  let result = input.shift();
  // for each input line , until "Travel"
  //   - determine coomand
  //   - execute command with given arguments
  // -print current result
  while (input[0] !== "Travel") {
    let tokens = input.shift().split(":");
    let command = tokens[0];
    let action = actions[command];
    action(tokens[1], tokens[2]);
  }

  // print final result
  console.log(`Ready for world tour! Planned stops: ${result}`);
  // Add Stop
  // - validate index
  // - insert given string into result

  // Remove Stop
  // -valide both indexes
  // - remove part of the result from start to end (inclusicve)

  function add(index, string) {
    index = Number(index);
    if (validate(index)) {
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = left + string + right;

      console.log(result);
    }
  }
  function remove(start, end) {
    start = Number(start);
    end = Number(end);
    if (validate(start) && validate(end)) {
      let left = result.substring(0, start);
      let right = result.substring(end + 1);
      result = left + right;
    }
  }

  // Switch
  // -  replace all occurances of oldString with newString
  function swap(oldString, newString) {
    let pattern = new RegExp(oldString,'g');
    result = result.replace(pattern, newString);
  }

  function validate(index) {
    return index >= 0 && index < result.length;
  }
}


worldTravel([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

//===========================================================
 // FULL

function pianist(input) {
  // parse initial catalog
  // determine number of initial pieces(sings)
  // - for the next n lines, parse input and store pieces in catalog

  let catalog = {};
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [name, composer, key] = input.shift().split("|");
    catalog[name] = {
      composer,
      key,
    };
  }
  console.log(catalog);
  // parse command
  // -- for each line, until 'Stop' is received
  // -- determine command
  // -- execute opeartion, using given parameters

  while (input[0] !== "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let name = tokens[1];
    // Add
    // -- pare params
    //--if piece exist , print error
    //--  else, add new picece to catalog
    if (command === "Add") {
      if (catalog[name] !== undefined) {
        console.log(`${name} is already in the collection!`);
      } else {
        catalog[name] = {
          composer: tokens[2],
          key: tokens[3],
        };
        console.log(
          `${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`
        );
      }
      //Remove
      // -- parse params
      // -- if piece does not exist, print error
      // -- else, remove pice from catalog
    } else if (command == "Remove") {
      if (catalog[name] === undefined) {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        delete catalog[name];
        console.log(`Successfully removed ${name}!`);
      }
    } else if (command === "ChangeKey") {
      if (catalog[name] === undefined) {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        catalog[name].key = tokens[2];
        console.log(`"Changed the key of ${name} to ${tokens[2]}!`);
      }
    }
  }
  //sort catalog
  // -convert object into array
  // - sort array based on the lexicographical order of piece name and then composer name
  let sorted = Object.entries(catalog).sort((a, b) => {
    let nameA = a[0];
    let nameB = b[0];

    let composerA = a[1].composer;
    let composerB = b[1].composer;
    // console.log(a);
    // console.log(b);
    return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
  });
  // print result
  // -for each elem of sorted result , print info
  for (let [name, piece] of sorted) {
    console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  }

  //Change Key
  //- parse params
  //-if piece Does not exist, print error
  // - else, update piece key to given value
}

pianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

//========================================================================
  
function imitationGame(input) {
  let result = input.shift();

  while (input[0] != "Decode") {
    let tokens = input.shift().split("|");
    let command = tokens[0];

    if (command == "Move") {
      let index = Number(tokens[1]);
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = right + left;
    } else if (command == "Insert") {
      let index = Number(tokens[1]);
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = left + tokens[2] + right; 
    } else if (command == "ChangeAll") {
      result = result.split(tokens[1]).join(tokens[2])
    }
  }
  console.log(`The decrypted message is: ${result}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);



//=====================================================

function adAstra(text) { 
  let total = 0;
  let result = [];
// ([A-Za-z\s]+)
// (\d{2}\/\d{2}\/\d{2})
// (\d+)

let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

let match = pattern.exec(text);

while (match != null) {
  
  let name = match[2];
  let date = match[3];
  let calories =Number(match[4]);

  total += calories;
  result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`)
  
  console.log(result);

  console.log(`\n ============================================= \n`);

  match = pattern.exec(text);
}
let days = Math.floor(total / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  
  for (let line of result) {
    console.log(line);
  }

} adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
  ])

  //====================================================================

      //    WEB Project

function sumNumbers(a,b) {
  return a + b
}
let myVar = sumNumbers(4,7);

//=========================================================

function heroesCodeAndLogic(input) {
  let heroes = {};
  let n = Number(input.shift());
  input.splice(0, n).forEach((line) => {
    let [heroName, hp, mp] = line.split(" ");
    hp = Number(hp);
    mp = Number(mp);

    heroes[heroName] = { hp, mp };
  });

  let commandActions = {
"CastSpell": castSpell,
'Recharge': recharge,
'TakeDamage': takeDamage,
'Heal':heal

  }

  input.forEach(line => {
    let [command, ...tokens] = line.split(" - ");
   

    if (command !== "End") {

      let func = commandActions[command];
      console.log(func(heroes,...tokens));
      //let output;
      // if (command === "CastSpell") {
      //   output = castSpell(heroes, ...tokens);
      // } else if (command === "Recharge") {
      //   output = recharge(heroes, ...tokens);
      // } else if (command === "TakeDamage") {
      //   output = takeDamage(heroes, ...tokens);
      // } else if (command === "Heal") {
      //   output = heal(heroes, ...tokens);
      // }
      //console.log(output);
    }
    let sortedHeroes = Object.entries(heroes)
    .sort(compareHeroes);

    for (let [heroeName, heroInfo] of sortedHeroes) {
      let {hp,mp} = heroInfo;

      console.log(heroeName);
      console.log(`  HP: ${hp}`);
      console.log(`  MP: ${mp}`);
    } 
    
  });
function compareHeroes(a,b) {
  let[aName,aInfo] = a;
  let [bName,bInfo] = b;

  let byHPthDescending = bInfo.hp - aInfo.hp;

  if (byHPthDescending === 0) {
    return aName.localeCompare(bName);
  }
  return byHPthDescending;
}

  function castSpell(heroes, heroName, mpNeeded, spellName) {
    mpNeeded = Number(mpNeeded);
    const hero = heroes[heroName];

    if (hero.mp >= mpNeeded) {
      hero.mp -= Number(mpNeeded);
      return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`;
    }
    return `${heroName} does not have enough MP to cast ${spellName}!`;
  }

  function takeDamage(heroes, heroName, damage, attacker) {
    damage = Number(damage);
    const hero = heroes[heroName];
    hero.hp -= damage;

    if (hero.hp > 0) {
      return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`;
    }
    delete heroes[heroName];
    return `${heroName} has been killed by ${attacker}!`;
  }

  function recharge(heroes, heroName, ammount) {
    ammount = Number(ammount);
    const hero = heroes[heroName];

    let oldValue = hero.mp;
    hero.mp = Math.min(200, hero.mp + ammount);

    return `${heroName} recharged for ${hero.mp - oldValue} MP`;
  }

  function heal(heroes, heroName, ammount) {
    ammount = Number(ammount);
    //let hero = heroes[heroName]
    let oldValue = heroes[heroName].hp;
    heroes[heroName].hp = Math.min(100, heroes[heroName].hp + ammount);

    return `${heroName} healed for ${heroes[heroName].hp - oldValue} HP!`;
  }
}
heroesCodeAndLogic([
  2,
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);

//========================================================

function fancyBarcodes(input) {
  input.shift();
  let regex = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;
  //let secondRegex = new RegExp('(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)','g')
  input.forEach((line) => {
    if (regex.test(line)) {
      let tokens = regex.exec(line);
      let barcode = tokens[2];

      let numbers = [...barcode]
      .filter(symbol => /\d/.test(symbol))
      .join('');

      let productGroup = numbers === '' ? '00' : numbers;
      console.log(`Product group: ${productGroup}`);
      //console.log(tokens);
    } else {
      console.log('Invalid barcode');
    }
  });
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);

//=====================================================


function activationKeys(input) {
  let rawKey = input.shift();

  for (let line of input) {
    if (line == "Generate") {
      console.log(`Your activation key is: ${rawKey}`);
      break;
    }
    let [command, x, y, z] = line.split(">>>");
    if (command === "Contains") {
      if (rawKey.includes(x)) {
        console.log(`${rawKey} contains ${x}`);
      } else {
        console.log(`Subtring not found`);
      }
    } else if (command === "Flip") {
      y = Number(y);
      z = Number(z);

      let substr = rawKey.substring(y, z);
      if (x === `Upper`) {
        substr = substr.toUpperCase();
      } else {
        substr = substr.toLowerCase();
      }
      rawKey = rawKey.substr(0, y) + substr + rawKey.substring(z);
      console.log(rawKey);
    } else if (command === "Slice") {
      rawKey = rawKey.substring(0, x) + rawKey.substring(y);
      console.log(rawKey);
    }
  }
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);

//===========================================
*/

//==================================================

function heroesCodeAndLogic(input) {
  let heroes = {};
  let n = Number(input.shift());
  input.splice(0, n).forEach((line) => {
    let [heroName, hp, mp] = line.split(" ");
    hp = Number(hp);
    mp = Number(mp);

    heroes[heroName] = { hp, mp };
  });

  let commandActions = {
"CastSpell": castSpell,
'Recharge': recharge,
'TakeDamage': takeDamage,
'Heal':heal

  }

  input.forEach(line => {
    let [command, ...tokens] = line.split(" - ");
   

    if (command !== "End") {

      let func = commandActions[command];
      console.log(func(heroes,...tokens));
      //let output;
      // if (command === "CastSpell") {
      //   output = castSpell(heroes, ...tokens);
      // } else if (command === "Recharge") {
      //   output = recharge(heroes, ...tokens);
      // } else if (command === "TakeDamage") {
      //   output = takeDamage(heroes, ...tokens);
      // } else if (command === "Heal") {
      //   output = heal(heroes, ...tokens);
      // }
      //console.log(output);
    }
    let sortedHeroes = Object.entries(heroes)
    .sort(compareHeroes);

    for (let [heroeName, heroInfo] of sortedHeroes) {
      let {hp,mp} = heroInfo;

      console.log(heroeName);
      console.log(`  HP: ${hp}`);
      console.log(`  MP: ${mp}`);
    } 
    
  });
function compareHeroes(a,b) {
  let[aName,aInfo] = a;
  let [bName,bInfo] = b;

  let byHPthDescending = bInfo.hp - aInfo.hp;

  if (byHPthDescending === 0) {
    return aName.localeCompare(bName);
  }
  return byHPthDescending;
}

  function castSpell(heroes, heroName, mpNeeded, spellName) {
    mpNeeded = Number(mpNeeded);
    const hero = heroes[heroName];

    if (hero.mp >= mpNeeded) {
      hero.mp -= Number(mpNeeded);
      return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`;
    }
    return `${heroName} does not have enough MP to cast ${spellName}!`;
  }

  function takeDamage(heroes, heroName, damage, attacker) {
    damage = Number(damage);
    const hero = heroes[heroName];
    hero.hp -= damage;

    if (hero.hp > 0) {
      return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`;
    }
    delete heroes[heroName];
    return `${heroName} has been killed by ${attacker}!`;
  }

  function recharge(heroes, heroName, ammount) {
    ammount = Number(ammount);
    const hero = heroes[heroName];

    let oldValue = hero.mp;
    hero.mp = Math.min(200, hero.mp + ammount);

    return `${heroName} recharged for ${hero.mp - oldValue} MP`;
  }

  function heal(heroes, heroName, ammount) {
    ammount = Number(ammount);
    //let hero = heroes[heroName]
    let oldValue = heroes[heroName].hp;
    heroes[heroName].hp = Math.min(100, heroes[heroName].hp + ammount);

    return `${heroName} healed for ${heroes[heroName].hp - oldValue} HP!`;
  }
}
heroesCodeAndLogic([
  2,
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);

