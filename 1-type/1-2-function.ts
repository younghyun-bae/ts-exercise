{
  // // JS 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TS ✨
  // function add(num1: number, num2: number) number {
  //   return num1 + num2;
  // }


  // // JS 💩
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TS ✨

  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }


  // JS ✨ => TS
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Younghyun', 'Bae');
  printName('Bailey');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage(); // default message

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2)); // 3
  console.log(addNumbers(1, 2, 3, 4)); // 10
  console.log(addNumbers(1, 2, 3, 4, 5, 0)); // 15
}

