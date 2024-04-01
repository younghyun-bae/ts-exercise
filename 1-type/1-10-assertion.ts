{
  // Type Assertions 💩
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // result.length(); doesn't work
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  //🙀 app will be dead
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  //🙀 all will be dead
  numbers!.push(2); 

  //Sometimes used if it's for sure
  const button = document.querySelector('class')!;
  if(button) {
    button.nodeValue;
  }
}