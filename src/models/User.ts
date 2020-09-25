import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  //public attributes: Attributes<UserProps> = new Attributes<UserProps>();  //NOT PROPER!
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  //IF NOT defined as getter/accessor function, then its strongly dependent on the how "on" defined in Eventing class.
  //If something changes in the definition on  the "on" function, all classes like this using on from Eventing, must be changed.
  //Pain in the ass.
  /*
  on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback);
  }
  */

  //Here is the solution:
  //Anytime someone references this on property I will return "this.events.on".
  //Now notice how I'm NOT calling "on" here. So the real leap of faith you need to make here
  //the real important thing to understand is that I am NOT trying to call a function right here.
  //Instead I'm trying to return a reference to the "events.on" method.
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
