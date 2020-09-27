import { User, UserProps } from '../models/User';
import { View } from './View';

//export class UserForm extends View {
export class UserForm extends View<User, UserProps> {
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
      'click:.save-model': this.onSaveClick,
    };
  }

  //onSetAgeClick(): void {
  onSetAgeClick = (): void => {
    //console.log('Set Age Clicked!');
    this.model.setRandomAge();
    //console.log(this.model.get('age'));
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    //console.log(input.value);
    //type-guard
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class='set-name'>Change Name</button>
        <button class='set-age'>Set Random Age</button>
        <button class='save-model'>Save User</button>
      </div>
    `;
  }
  // template(): string {
  //   return `
  //     <div>
  //     <h1>User Form</h1>
  //     <div>User name: ${this.model.get('name')}</div>
  //     <div>User age: ${this.model.get('age')}</div>
  //     <input />
  //     <button class='set-name'>Change Name</button>
  //     <button class='set-age'>Set Random Age</button>
  //     </div>
  //   `;
  // }
}
