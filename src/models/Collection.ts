import axios, { AxiosResponse } from 'axios';
//import { User, UserProps } from './User';
import { Eventing } from './Eventing';

//CURRENT PROBLEM ABOUT THIS CLASS IS, ITS NOT GENERIC, ONLY CAN WORK WITH USER CLASS
//export class Collection {
//T: might be User and K might be UserProps
export class Collection<T, K> {
  //models: User[] = [];
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  //why we are not using shortened version of getters/accessors?
  //because properties of this class defined inline style, not as constructor params
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      //response.data is array of users, tested on the index.ts by the code like below:
      // axios.get('http://localhost:3000/users').then((response: AxiosResponse) => {
      //     console.log(response.data);
      // });
      //response.data.forEach((value: UserProps) => {
      response.data.forEach((value: K) => {
        //const user = User.buildUser(value);
        //this.models.push(user);
        this.models.push(this.deserialize(value));
      });

      this.trigger('allUsersLoaded');
    });
  }
}
