/*
import { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
*/
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  //this static method will be used for creating pre-configured user instances
  //otherwise, for ex in the index.ts, we need to call like that: const user = new User(attributes, events, sync)
  //but with the help of this static method below its enough to call
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  // static buildLocalUser(attrs: UserProps): User {
  //   return new User(
  //     new Attributes<UserProps>(attrs),
  //     new Eventing(),
  //     new LocalSync<UserProps>(rootUrl)
  //   );
  // }

  // isAdminUser(): boolean {
  //   return this.get('id') === 1;
  // }
}

//After adding Model class, all things one here moved to Model.ts
/*
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

  // on(eventName: string, callback: Callback): void {
  //   this.events.on(eventName, callback);
  // }

  //Here is the solution:
  //Anytime someone references this on property I will return "this.events.on".
  //Now notice how I'm NOT calling "on" here. So the real leap of faith you need to make here
  //the real important thing to understand is that I am NOT trying to call a function right here.
  //Instead I'm trying to return a reference to the "events.on" method.

  //ALL THE FUNCTIONS BELOW MOVED TO Model CLASS, TO IMPLEMENT "INHERITANCE" STYLE APPROACH
    get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    //const id = this.attributes.get('id');
    const id = this.get('id'); //nothing much difference with the line commented

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      //this.attributes.set(response.data);
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
*/
