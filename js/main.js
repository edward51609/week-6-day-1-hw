//Basics of JavaScript -- Single line comment

// String Variable
var first_name = 'Bill'

// Display our value in JS Console
console.log(first_name)

// Integer variable
var some_number = 31;

// Display value
console.log(some_number)


// Float Variable
var some_float = 3.14

console.log(some_float)

//Array Variable
var some_array = [1,2,3,4]

console.log(some_array)

// Object variable
var some_object = { 'test': 'please test me!'}

console.log(some_object)

// javascript hoisting example
console.log(some_random_variable)
var some_random_variable = 'this is a random string';
console.log(some_random_variable)

// A Better Declaring Of A Variable
let full_name = first_name + ' smith'
console.log(full_name)

// Bad or Sad example
//console.log(full_name2)
//let full_name2
//console.log(full_name2)

const super_hero = 'ironman';
console.log(super_hero)
//super_hero = 'black panther' // expected error; typeError

// Addition
let sum = 5 + 5 //let sum += 5
console.log(some_number)

// subtraction
let diff = 5 - 5 // let diff -= 5

//multiplication
let product = 5 * 5 // let product *= 5
console.log(product)

// division
let divide = 5 / 5 // let divide /= 5
console.log(divide)

//exponential
let square = 5 ** 2 // let square **= 2
console.log(square)

//more math operations
//finding the floor decimal
let find_floor = Math.floor(25.8)
console.log(find_floor) // expected output: 25

//find the ceiling of a decimal
let find_ceil = Math.ceil(25.8)
console.log(find_ceil) // expected output: 26

// changing a declared variable
find_ceil = Math.ceil(33.9)
console.log('This is a changed value:', find_ceil)

//Mind Binder
let crazy_stuff = some_float + '4' // undefined, 7.14, 3.14+4, 3.144
console.log(crazy_stuff)

//mind binder 2
let crazy_stuff2 = some_float + parseFloat('4') // undefined , 7.14, 3.14+4 , 3.144
console.log(crazy_stuff2)

//using the let keyword - changing the value
let nba_goat = 'michael jordan'
console.log(nba_goat)

nba_goat = 'kobe' // redeclaration of the above variable
console.log(nba_goat)

// Bad REDECLARATION:
//let nba_goat = 'lebron'
//console.log(nba_goat)

//functions

//regular named functions
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

// calling a function
console.log( addNums() )

// variable named function with parameters
let addNum2 = function(num, num2){
    return num + num2
}

//calling our function
console.log( addNum2(4,5) )

// ES6+ Arrow Function in JavaScript
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2
}

console.log( multiplyNums() )

// ES6+ arror function with WITH parameters( single Param )
/*
    using a single parameter in an arrow function WITHOUT parens
    can only be done with ONE parameter NOT if 2 or more are present
*/

let cubed = (num) => {
    return num ** 3
}

//Another way of expressing the above code...
let cubed2 = num => {
    return num ** 3
}

console.log( cubed(4) )
console.log( cubed2(4) )

//Ask for 2 parameter inside of a function WITHOUT parens -- BAD
//let cubed3 = num,num2 => {
//    return num ** num2
// }

//Ask for 2 parameter inside of a function WITHOUT parens -- GOOD
//let cubed3 = (num,num2) => {
//    return num ** num2
// }


//JAVASCRIPT CLOSURE
//self-invoking function

/*
    our console.log in the below example does not have to be provided
    -- we will just use this for an easier display of output
*/

console.log( ( function (name) {
    let hello = 'hello world' + name;
    return hello
}) ('joel') ) 


//javascript control flow
//if statement
function determineAge(age){
    if( age < 18 ){
        return 'minor'
    } else if ( age >= 18 && age <= 65 ){
        return 'adult not retired yet'
    } else {
        return 'elderly person - retired'
    }
}

console.log( determineAge(22) )

//javascript ternary operater
function determine_Age(age){
    return ( age < 18) ? 'minor' : ( age >= 18 && age <= 65 ) ? 
    'adult not retired yet' : 'elderly person retired'
}

console.log( determine_Age(22) )


// loops in javascript - for loop
// for loop syntax -- for keyword(counter; conditional; incrementation/decremantation)

function countByOne(){
    // for loop
    for (let i = 0; i < 20; i++){
        console.log(i)
    }

    return 'counting has stopped'
}

console.log( countByOne() )

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'decreasing has stopped'
}

console.log( decreaseByOne() )

//while loop - javascript
function count_with_while(){
    let i = 0 // counter
    let text = '';

    //while loop
    while(i < 20){
        text += `this number is....${i} \n`
        i++
    }
    return text
}

console.log( count_with_while() )

//do while loop - javascript
function count_with_do_while(){
    let i = 0 //counter
    let text = ''


    //do
    do {
        text += `this number is above...${i} \n`
        i++
    }

    while(i < 10)
    return text
}

console.log( count_with_do_while() )

/*
    looping with arrays and aray methods, also -- array string methods
*/

// creation of an array: group_of_names
let group_of_names = ['terry', 'Ben', 'ash', 'Brock', 'misty']

//index for the first position == 'terry'
console.log(group_of_names[0])

//deconstruction of an array
let terry, ben, ash;
[terry, ben, ash] = group_of_names

// terry = group_of_names
//ben = group_of_names
//ash = group_of_names

console.log(terry, ben, ash)


/*
    looping through n arrray
*/
// method 1: looping through an array with for logo
function show_all_names(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }

    return 'done with list of names'
}
console.log( show_all_names() )

// method 2: looping through an array with the .forEach method
console.log( group_of_names.forEach(
    (element) => console.log(element)
))

//javascript array method: array.
console.log( group_of_names.toString() )
console.log(typeof( group_of_names.toString() ))

/* javascript array methods: .map(), .filter, .reduce */
let b_names = group_of_names.map( i => {
    if(i[0] == 'B'){
        return i
    } else{
        return false
    }
})

// Long form version of .map()
let b_test_names = function (){
    let test_array = []
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_test_names())
console.log(b_names)

// .reduce()
const nums = [2,4,6,8,10]
let nums_reduced = nums.reduce( (accumulator, current_num ) => {
    return accumulator + current_num
})

console.log(nums_reduced)

// .filter()
let long_names = group_of_names.filter(element => element.length > 4)

console.log(long_names)

// array methods with string values: .join() 

// .join()
console.log( group_of_names.join(",") )


//.slice()
console.log(group_of_names.slice(0, 3)) // terry, ben, ash

// .search on an array value that is a string
console.log(group_of_names[0].search('t')) // index == 0



// string.slice() method inside of array
console.log( group_of_names[1].slice(0, group_of_names[1].length))





// .splice()
function replace_new_names(){
    //for loop to get all names
    //and replace even indexs
    for(let i = 0; i < group_of_names.length; i++){
        if(i % 2 == 0){
            group_of_names.splice(i, 1, 'goku')
        }
    }

    return group_of_names
}

console.log(replace_new_names())