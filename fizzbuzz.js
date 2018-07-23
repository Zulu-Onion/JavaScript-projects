/*
My Fizzbuzz answer in JS
*/
function fizzBuzz(){
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0){
            console.log('fizzBuzz: ' + num);
        }else if (num % 3 === 0){
            console.log('fizz: ' + num);
        }else if (num % 5 === 0){
            console.log('buzz: ' + num);
        }
    }
}
fizzBuzz();
