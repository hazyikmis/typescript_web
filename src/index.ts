//with this example we can show some basic content on the dom
//before the changes on this file, the div named/id-ed "root" added to the "index.html"
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
