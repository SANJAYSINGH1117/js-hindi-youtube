
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
