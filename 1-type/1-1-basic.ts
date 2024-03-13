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
  // 무언가가 있고 없는지 값 할당할 때 씀
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

  // void 아무것도 리턴하지 않을 때, 생략가능
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //Never

  // never 에러코드 짤 때
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
    // while(true) {

    // }
  }

  // object 아무거나 다 할당 가능
  let obj: object; //Never
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({name: 'younghyun'});
  acceptSomeObject({animal: 'dog'});
}