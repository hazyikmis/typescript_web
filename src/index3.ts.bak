import { User } from './models/User';

const user = new User({ name: 'Ghengiz', age: 45 });

console.log(user.get('name'));
//"get" method (in Attributes class) /property (in User class) refers to "user" in Attributes class.
//But it must refer to "Attributes" class itself. "data" property defined in Attributes, not in User.
//The solution for this problem is, defining "get" method as "arrow function" in the Attributes class.

const on = user.on;

//the "on" call below does not call /execute callback, just assigns the callback to "change" keyword
on('change', () => {
  console.log('user changed!');
});

// OR, directly call is also possible!

//the "on" call below does not call /execute callback, just assigns the callback to "save" keyword
user.on('save', () => {
  console.log('user saved!');
});

//here is the calls/executions!
user.trigger('change');
user.trigger('save');

/*
const colors = {
  color: 'red';
  printColor() {
    console.log(this.color)
  }
}

colors.printColor(); //NO PROBLEM, "this" REFERS TO "colors"

//HERE IS THE PROBLEM:
//reference to "colors" lost
const printCol = colors.printColor;
printCol();  //try to execute "undefined.printColor()"
*/
