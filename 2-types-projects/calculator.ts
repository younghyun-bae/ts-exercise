// let's make a calculator 🧮

console.log(calculator('add', 1, 3)); //4
console.log(calculator('substract', 3, 1)); //2
console.log(calculator('multiply', 4, 2)); //8
console.log(calculator('divide', 4, 2)); //2
console.log(calculator('remainder', 5, 2)); //1

//function calculator(command: 'add' | 'substract' | 'multiply' | 'divide' | 'remainder', a: number, b: number): number{}

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculator(command: Command, a: number, b: number): number {
  switch(command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw new Error('unknown error');
  }
}