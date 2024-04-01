{ 
  // Checking each types with each testing funcs? 🙀
  function checkNotNullBad(arg: number | null): number {
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  // const result = checkNotNullBad(123);
  // console.log(result); // 123
  // checkNotNullBad(null); // error

  // What about this?
  // Using 'any' is 🙀
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123); // info of type is gone

  // Generic
  //it can be shorten with first letter <T>(arg: T | null): T ...
  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123); //number
  const boal: boolean = checkNotNull(true); //boolean

}