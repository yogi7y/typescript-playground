function greet(name) {
    if (name === void 0) { name = 'stranger'; }
    return "Hey, ".concat(name, "!");
}
function sum(num1, num2) {
    return "Sum of ".concat(num1, " and ").concat(num2, " is ").concat(num1 + num2);
}
console.log(greet('Yogi'));
console.log(greet());
console.log(sum(10, 5));
