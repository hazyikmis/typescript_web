import axios, { AxiosResponse } from 'axios';

import { User, UserProps } from './User';
import { Eventing } from './Eventing';

//CURRENT PROBLEM ABOUT THIS CLASS IS, ITS NOT GENERIC, ONLY CAN WORK WITH USER CLASS
export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

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
      response.data.forEach((value: UserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });

      this.trigger('allUsersLoaded');
    });
  }
}
