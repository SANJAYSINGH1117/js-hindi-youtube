
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

//---------------------------------------------------------------------

// // This is a constructor function
// function User(username, loginCount, isLoggedIn) {
//     this.username = username; // Initializes property on the new object
//     this.loginCount = loginCount;
// }

// // Calling it with 'new' is using the constructor
// const userOne = new User("Sanjay", 25, true); 
// // userOne is now { username: "Sanjay", loginCount: 25, ... }
// console.log(userOne)

class Car {
    // This is the constructor method
    constructor(make, model, year) {
        // Initializes the new Car object's properties
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getDetails() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

// Calling the class constructor
const myCar = new Car("Honda", "Civic", 2024);
// myCar is initialized via the constructor and ready to use
console.log(myCar.getDetails()); // Output: Honda Civic





//-------------------
program to determine evan and odd number using functions and class
// 1. The Logic Function (The "Brain")
function checkNumber(input) {
    let n = Number(input);
    
    // Check for empty strings or non-numbers
    if (input.trim() === "" || isNaN(n)) {
        console.log("⚠️ Invalid input! Please enter a real number.");
    } else {
        // Using a ternary operator to decide Even or Odd
        console.log(n % 2 === 0 ? `🟢 ${n} is Even` : `🔵 ${n} is Odd`);
    }
}

// 2. The Loop Function (The "Body")
function startApp() {
    const exitWords = ["stop", "exit", "quit", "done"];

    while (true) {
        let userIn = prompt("Enter a number (or type 'stop'):");

        // Handle ESC (null) or checking if input is in our exitWords array
        if (userIn === null || exitWords.includes(userIn.toLowerCase().trim())) {
            console.log("👋 Program Closed.");
            break; 
        }

        // Call the logic function
        checkNumber(userIn);
    }
}

// 3. Run the program
startApp();

// Using class

class NumberApp {
    constructor() {
        this.exitWords = ["stop", "exit", "quit", "done"];
    }
    
    // The Logic
    check(input) {
        let n = Number(input);
        if (input.trim() === "" || isNaN(n)) {
            console.log("⚠️ Invalid input! Please enter a real number.");
        } else {
            console.log(n % 2 === 0 ? `🟢 ${n} is Even` : `🔵 ${n} is Odd`);
        }
    }

    // The Loop
    start() {
        while (true) {
            let userIn = prompt("Enter a number (or type 'stop'):");

            // Handle ESC or Exit words
            if (userIn === null || this.exitWords.includes(userIn.toLowerCase().trim())) {
                console.log("👋 Program Closed.");
                break;
            }

            this.check(userIn);
        }
    }
}

// Start the app
const myApp = new NumberApp();
myApp.start();
