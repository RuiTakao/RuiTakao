'use strict';

function number(num) {


  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz!';
  } else if (num % 3 === 0) {
    return 'Fizz!';
  } else if (num % 5 === 0) {
    return 'Buzz!';
  } else {
    return num;
  }

}

console.log(number(5));

let i = 1;
while (i <= 30) {
  console.log(number(i));
  i++
}