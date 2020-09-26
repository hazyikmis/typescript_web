import { User } from './User';
import { Eventing } from './Eventing';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  //why we are not using shortened version of getters/accessors?
  //because properties of this class defined inline style, not as constructor params
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
