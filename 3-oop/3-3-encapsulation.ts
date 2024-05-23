{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public
  //private
  //protected
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level, if it can't be changed - static readonly
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } // better to use static method for private constructor

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -36; //invalid


  // Getter and Setter
  class User {
    // firstName: string;
    // lastName: string;
    // fullName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    } 
    private internalAge = 26;
    get age(): number {
      return this.internalAge;
    } //Read-only
    set age(num: number) {
      if (num < 0) {
        // validation test code...
      }
      this.internalAge = num;
    }
    constructor (private firstName: string, private lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;
    }
  }
  const user = new User('Younghyun', 'Bae');
  console.log(user.fullName);
  // user.firstName = 'Steve';
  user.age = 6;
  console.log(user.fullName);
  
}