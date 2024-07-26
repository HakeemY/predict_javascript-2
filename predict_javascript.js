//********* Problem 1 Code ***************
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)


// Predict the output
// Answers
// Tesla
// Mercedes


// Actual Output
// Tesla
// Mercedes

//********* Problem 2 Code ***************

// const employee = {
//     employeeName: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { employeeName: otherName } = employee;
// //Predict the output
// console.log(otherName);
// console.log(employeeName);

// Predict the output
// Elon
// Issue with employeeName


// Actual Output
// Elon
// ReferenceError: employeeName is not defined


//********* Problem 3 Code ***************

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// // Predict the output
// 12345
// password not defined in person block

// // Actual Output
// 12345
// undefined



//********* Problem 4 Code ***************

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first === second);
// console.log(first === third);

// // Predict the output
// 2 === 6
// 2 === 2

// // Actual Output
// false
// true

//********* Problem 5 Code ***************

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);

// // Predict the output
// value
// {1,5,1,8,3,3}
// 1
// 5

// // Actual Output

// value
// [ 1, 5, 1, 8, 3, 3 ]
// 1
// 5


//********* Problem 6 Code ***************

    // var beatles = ['Paul', 'George', 'John', 'Ringo'];
    // function printNames(names) {
    // function actuallyPrintingNames() {
    //     for (var index = 0; index < names.length; index++) {
    //     var name = names[index];
    //     console.log(name + ' was found at index ' + index);
    //     }
    //     console.log('name and index after loop is ' + name + ':' + index);
    // }
    // actuallyPrintingNames();
    // }
    // printNames(beatles);
    
    // // Predict the output
    
    
    // // Actual Output
    
    // Paul was found at index 0
    // George was found at index 1
    // John was found at index 2
    // Ringo was found at index 3
    // name and index after loop is Ringo:4

//********* Problem 7 Code ***************

// function actuallyPrintingNames() {
// for (let index = 0; index < names.length; index++) {
//     let name = names[index];
//     console.log(name + ' was found at index ' + index);
// }
// console.log('name and index after loop is ' + name + ':' + index);
// }     
// // Predict the output
    
    
    // // Actual Output

   //********* Problem 8 Code *************** 

// const beatles = ['Paul', 'George', 'John', 'Ringo'];
//     function printNames(names) {
//     function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//         const name = names[index];
//         console.log(name + ' was found at index ' + index);
//     }
//     }
//     actuallyPrintingNames();
//     }
//     printNames(beatles);

//     // // Predict the output
    
    
//     // // Actual Output

// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

//********* Problem 9 Code ***************

// const planet = {
// 	name:"Jupiter",
// 	milesFromSun: 49849,
// 	mass: 393983,
//             composition: ["gas", "liquid", "oxygen"]
// }
// const planetCopy = {...planet}
// console.log(planet.composition[0] === planetCopy.composition[0]) 
// console.log(planet === planetCopy)

// //     // // Actual Output
// true
// false