function greet(name: string = "stranger"): string {
  return `Hey, ${name}!`;
}

function sum(num1: number, num2: number): string {
  return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
}

const arrowFunction = (foo: string): string => {
  return `You passed in ${foo}`;
};

console.log(greet("Yogi"));
console.log(greet());
console.log(sum(10, 5));
console.log(arrowFunction("foo bar"));
