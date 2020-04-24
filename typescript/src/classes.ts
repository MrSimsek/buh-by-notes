// Classes
class Animal {
  // by default class properties are public
  sound: string;
  private creditCardNumber: number;
  constructor(sound: string, cardNumber: number) {
    this.sound = sound;
    this.creditCardNumber = cardNumber;
  }

  makeSound() {





    
    return `3.. 2.. 1.. ${this.sound}`;
  }
}

let lion = new Animal('ggghhrrrraaa', 111222);
