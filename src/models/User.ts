//"interfaces" are not only used to somehow get some amount of code reuse between different classes
//they are also used to create types that describe object liberals

interface UserProps {
  // name: string;
  // age: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  //we don't know which events in the future
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserProps): void {
    Object.assign(this.data, newData);
  }

  //this method below is only for registering events not triggering them
  //on(eventName: string, callback: () => void): void {
  on(eventName: string, callback: Callback): void {
    //quick example
    //this.events["anEvent"] = [callback]
    //this.events["anotherEvent"] = [() => {}]

    //this.events[eventName] //Callback[] or undefined, so we need to handle both
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}
