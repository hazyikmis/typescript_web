import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

//"interfaces" are not only used to somehow get some amount of code reuse between different classes
//they are also used to create types that describe object liberals
interface UserProps {
  // name: string;
  // age: number;
  id?: number; //for especially user instances fetched from backend
  name?: string;
  age?: number;
}

/*
//Option #1: Accept dependencies as 2nd constructor argument
export class User {
  constructor(private data: UserProps, private events: Eventing) {}
  //...
}
//call--> new User({id: 1}, new Eventing());

//Option #2: Only accept dependencies in the constructor, Define a static class method to configure User and assign properties afterwards
export class User {
  static fromData(data: UserProps): User {
    const user = new User(new Eventing());
    user.set(data);
    return user;
  }

  private data: UserProps;

  constructor(private events: Eventing) {}
  //...
}

//Option #3: Only accept properties in the constructor, Hard code dependencies as class properties
export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}
  //...
}
//Just after creating user, you can access directly to events
*/

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserProps): void {
    Object.assign(this.data, newData);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      //put - update user
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //post - create new user
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
