import { User } from './models/User';

const user = new User({ name: 'Ghengiz', age: 45 });

//THIS IS NOT WHAT WE WANT!
//WE WANT TO CALL METHODS ONLY FROM USER CLASS -> DELEGATION

user.attributes.data; // not accessible directly, its private property
user.attributes.get('id');
user.attributes.get('name');
user.attributes.get('age');

user.sync.save();
