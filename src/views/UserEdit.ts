//This class is created for showing NESTED views/components
//UserShow & UserForm will be nested inside UserEdit
import { View } from './View';
import { User, UserProps } from '../models/User';

import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender() {
    //THIS METHOD AUTOMATICALLY CALLED BECAUSE CALLED AS "this.onRender()" INSIDE View CLASS "render" method
    //do our nesting
    //"userShow" added to "this.regions" in View class, with "mapRegions" method

    // const userShow = new UserShow(this.regions.userShow, this.model);
    // userShow.render();
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
