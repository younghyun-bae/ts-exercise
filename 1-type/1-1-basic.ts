{
  // JavaScript
  // Primitive: number, string, boolean, bigintm symbol, null, undefined
  // Object: function, array...
  
  // number
  const num:number = -1;

  // string
  const str:string = 'jaja';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; //Never
  let age: number | undefined;
  age = undefined;
  age = 1;
  // When assigning a value depending on whether something exists or not
  function find(): number | undefined {
    return 2;
  }

  //null
  let person: null; //Never
  let person1: string | null;
  person1 = null;
  person1 = 'Younghyun';

  // unknown
  let notSure: unknown = 0; //Never
  notSure = 'he';
  notSure = true;

  // any
  let anything: any = 0; //Never
  anything = 'hello';

  // void - when returning nothing, and optionally omitted
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //Never

  // never - when coding for error
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
    // while(true) {

    // }
  }

  // object - anything is assignable
  let obj: object; //Never
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({name: 'younghyun'});
  acceptSomeObject({animal: 'dog'});
}