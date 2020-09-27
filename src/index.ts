//with this example we can show some basic content on the dom
//before the changes on this file, the div named/id-ed "root" added to the "index.html"
import { UserForm } from './views/UserForm';

const userForm = new UserForm(document.getElementById('root'));
userForm.render();
