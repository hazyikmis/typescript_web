import axios from 'axios';

/*
axios.post('http://localhost:3000/users', {
  name: 'myname',
  age: 20,
});
//check the network tab of F12
*/

//axios.get('http://localhost:3000/users/1');
//check the network tab of F12

import { User } from './models/User';

// fetching a user. setTimeout used because fetch is async function / returns a promise / this promise should be waited to be resolved
/*
const user = new User({ id: 1 });

user.fetch();

setTimeout(() => {
  //console.log(user);
  console.log(user.get('name'));
}, 4000);
*/

/*
// saving a user which is already in the db.json.
const user = new User({ id: 1 });
user.set({ name: 'newName', age: 999 });
user.save();

// saving a new user which is NOT in the db.json.
const user2 = new User({ name: 'new User', age: 32 });
user2.save();
*/

const user2 = new User({ name: 'new User', age: 32 });
user2.events.on('change', () => {
  console.log('change!');
});

user2.events.trigger('change');
