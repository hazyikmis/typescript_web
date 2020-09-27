export class UserForm {
  //we should tell this class exactly where to insert "user form". Rather than defining like that
  //we can tell inside constructor parameters...
  //parent: Element; //Element is the most generic class for insertion to DOM

  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
