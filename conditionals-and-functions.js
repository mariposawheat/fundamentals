/*
* Conditionals, Functions, Scope and Loops
 */

// Equals
let equals= 1===1;


// Greater than
let greaterThan = 5>1;

// Less than
let lessThan =2<10;

//Greater than Equals
let greaterThanEq =  5 >= 5;

// Less Than Equals
let lessThanEq = 4 >= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA=1.40;
let storeB= 3.40;

let storeAIsLower= storeA < storeB;
function compareStorePrices (storeA, storeB) {
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices(10,5);
//compareStorePrices(7,10)

function squareNum (number) {
    let squared = number * number;
    return squared
}

let squaredNumber = squareNum(10)
console.log(squaredNumber);

let x = 10;

function addNumbers (n,m) {
    console.log(x);
    let b;
    if(1===1) {
        let  b=8;
    }
    console.log(b);
    return n + m;
}

//                    0 1 2 3 4
let ourArray = [1,2,3,4,5,6,7];

let arrLen = ourArray.length;
for (let i = 0; i<arrLen; i++){
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
}



//loops

//  counter; comp ; incr
for (let i = 0; i<5; i++) {
    console.log("i is equal to: + i");
    // console.log(ourArray[i])
}
while (x<10) {
    console.log('ran');
    x=x + 1;
}
