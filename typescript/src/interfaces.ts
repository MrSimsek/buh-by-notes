interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

let deniz: Person = {
  name: 'Deniz',
  age: 27,
  isMarried: false,
  //   thisPropertyNotInInterface: 'This will give error'
};

let introduction: string = `Hi! My name is ${deniz.name}. 
  I am ${deniz.age} years old,
   and I am ${deniz.isMarried ? 'happliy married' : 'happily NOT married'}.`;
