import { User } from './models/User';

const user = new User({ name: 'Ghengiz', age: 45 });

//THIS IS NOT WHAT WE WANT!
//WE WANT TO CALL METHODS ONLY FROM USER CLASS -> DELEGATION
/*
user.attributes.data; // not accessible directly, its private property
user.attributes.get('id');
user.attributes.get('name');
user.attributes.get('age');

user.sync.save();
*/

//Quick reminder on accessors

class Person {
  constructor(public firstName: string, public lastName: string) {}

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  //same function above, but it's getter from now on!, and when calling it, no need to append () at the end;
  //WE CAN DEFINE FUNCTIONS AS "GETTER" IF THEY ARE USED FOR JUST RETRIEVING DATA, NOT FOR CHANGING SOMETHING
  get allName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('first', 'last');
console.log(person.fullName());
console.log(person.allName);
