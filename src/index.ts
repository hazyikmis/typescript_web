//with this example we can show some basic content on the dom
//before the changes on this file, the div named/id-ed "root" added to the "index.html"
/*
import { UserForm } from './views/UserForm';
import { User } from './models/User';

//const userForm = new UserForm(document.getElementById('root'));
const user = User.buildUser({ name: 'ali veli', age: 20 });
const root = document.getElementById('root');
//type-guard
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found!');
}
*/

//testing UserEdit class, which nests UserShow & UserForm classes
/*
import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'emmel', age: 40 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found!');
}
*/

//testing CollectionView & UserList classes
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

// const users = new Collection(
//   'http://localhost:3000/users',
//   (json: UserProps) => {
//     return User.buildUser(json);
//   }
// );

//no need to use as above, just call buildUserCollection
const users = User.buildUserCollection();

users.on('allUsersLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
