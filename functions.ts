function greet(name: string = 'stranger') {
    return `Hey, ${name}!`;
}

function sum(num1: number, num2: number) {
    return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
}



console.log(greet('Yogi'));
console.log(greet());
console.log(sum(10, 5));