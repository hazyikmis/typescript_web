import { User } from '../models/User';

export class UserForm {
  //we should tell this class exactly where to insert "user form". Rather than defining like that
  //we can tell inside constructor parameters...
  //parent: Element; //Element is the most generic class for insertion to DOM

  //constructor(public parent: Element) {}
  //constructor(public parent: Element, public model: User) {}
  /*
  constructor(public parent: Element, public model: User) {
    //if something changes (some data) on model, this meas that "change" event triggered
    this.model.on('change', () => {
      this.render();
    });
  }
  */

  //In order to keep the constructor as simplw as possible:
  constructor(public parent: Element, public model: User) {
    //if something changes (some data) on model, this meas that "change" event triggered
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  /*
So we need to somehow express to typescript that hey we're going to return an object and 
we don't necessarily know what the keys are going to be (for "eventsMap" method).
So to do so I'm going to put down an object literal right here I'll put in square brackets
and I'll say key all in string.
That tells typescript that Hey we're gonna return an object we don't really know what the 
keys are going to be but they're going to be strings and we're going to say that the value
for everything inside that object will be a function that takes no arguments and returns
nothing as is the case with on button click right here okay.  
So this events map is essentially how we're going to relate the different events that we
want to watch for inside of our HTML snippet to the different functions that we want to run.
*/

  //eventsMap() {
  eventsMap(): { [key: string]: () => void } {
    //in this approach, "key"s should be parsed!
    //of course, react and/or angular have much much better approaches in their frameworks/libraries
    //problem in here is: click event added to all buttons, there should be some id/class of buttons
    return {
      //'click:button': this.onButtonClick,
      //'hover:h1': this.onHeaderHover,
      //'mouseenter:h1': this.onHeaderHover,
      // 'drag:div': this.onDragDiv,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  // onButtonClick(): void {
  //   console.log('Hi there');
  // }

  // onHeaderHover(): void {
  //   console.log('Header was hovered!');
  // }

  //onSetAgeClick(): void {
  onSetAgeClick = (): void => {
    //console.log('Set Age Clicked!');
    this.model.setRandomAge();
    //console.log(this.model.get('age'));
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    //console.log(input.value);
    const name = input.value;
    this.model.set({ name });
  };

  // template(): string {
  //   return `
  //     <div>
  //       <h1>User Form</h1>
  //       <input />
  //       <button>Click Me!</button>
  //     </div>
  //   `;
  // }
  template(): string {
    return `
      <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class='set-name'>Change Name</button>
        <button class='set-age'>Set Random Age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':'); //  eventName --> 'click and selector --> 'button

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = ''; //first remove all elements under parent, otherwise, in the 2nd or 3rd renders add new instances...
    //normally Angular & React uses more clever ways when re-rendering elements on the DOM
    //Bu we are directly clearing everything and re-rendering from scratch again...

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
