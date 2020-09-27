//import { User } from '../models/User'; //Normally this "View" should be not work with only User, keep that at first, then refactor
import { Model } from '../models/Model';

//export abstract class View {
//Normally this "View" should be not work with only User, keep that at first, then refactor
//We want to use arbitrary any model, not only "User"
//constructor(public parent: Element, public model: User) {

//interface ModelForView {
//  on(eventName: string, callback: () => void): void;
//}
//ModelForView used as a generic constraint for class View

//Class View is now converted to GENERIC class (by accepting T)
//export abstract class View<T> {
//export abstract class View<T extends ModelForView> {
export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  //abstract eventsMap(): { [key: string]: () => void }; //NO NEED TO BE DEFINED AS "abstract"
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

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

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      //this.regions[key] is initially empty
      //this.regions[key] = fragment.querySelector(selector); //type-guard required
      const element = fragment.querySelector(selector);
      //type-guard
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}
  //actually this not called, since its NOT written as ARROW Function and called as "this.onRender()" below in "render" method,
  //the "onRender" defined in "onRender" called.
  //defined here as dummy function because, the code below, when calling "this.onRender()" should not throw an error

  render(): void {
    this.parent.innerHTML = ''; //first remove all elements under parent, otherwise, in the 2nd or 3rd renders add new instances...
    //normally Angular & React uses more clever ways when re-rendering elements on the DOM
    //Bu we are directly clearing everything and re-rendering from scratch again...

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.mapRegions(templateElement.content);

    this.onRender(); //just before appending to DOM

    this.parent.append(templateElement.content);
  }
}
