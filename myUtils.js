const reader = require('readline-sync');
let firstNumber = reader.question("Please insert a positive integer: ");
let secondNumber = reader.question("Please inserrt another positive integer: ");

let x = parseInt(firstNumber);
let y = parseInt(secondNumber);

let array = new array;
for(let i = x; i <= y; i++) {
    if(isPrime(i)) {
        array.push(i);
    }
}


module.exports = {
    isPrime: function(n) {
        if(n <=1) {
            return false;
        }

        let div = 2;

        while(div <= Math.sqrt(n)) {
            if(n % div === 0) {
                return false;
            }

            div++;
        }

        return true;
    }
}
