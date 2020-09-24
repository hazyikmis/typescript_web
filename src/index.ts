import { User } from './models/User';

const user = new User({ name: 'halo', age: 44 });
const user2 = new User({}); //ONLY POSSIBLE AFTER PUTTING "?" TO END OF PROPS IN INTERFACE DECLARATION

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'emo', age: 41 });
user.set({ name: 'yamo' }); //INITIALLY NOT WORKS! TO FIX THIS, we have putted "?" after every prop name: CHECK User class

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('Change #1');
});

user.on('change', () => {
  console.log('Change #2');
});

user.on('save', () => {
  console.log('Save');
});

console.log(user);

user.trigger('change');
user.trigger('save');
