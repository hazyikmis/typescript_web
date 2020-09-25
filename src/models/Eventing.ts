type Callback = () => void;

//Previously, on and trigger methods were in the User class
export class Eventing {
  //we don't know which events in the future
  events: { [key: string]: Callback[] } = {};

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
