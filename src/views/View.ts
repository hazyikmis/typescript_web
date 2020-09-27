import { User } from '../models/User'; //Normally this "View" should be not work with only User, keep that at first, then refactor

export abstract class View {
  //Normally this "View" should be not work with only User, keep that at first, then refactor
  //We want to use arbitrary any model, not only "User"
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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
