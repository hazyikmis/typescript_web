import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: T): void {
    Object.assign(this.data, newData);
  }
}

const attrs = new Attributes<UserProps>({ id: 5, name: 'tom', age: 21 });

//const id = attrs.get('id');  //in this case id is number or string
//const id:number = attrs.get('id');  //not allowed by TypeScript because it might be a string
const id = attrs.get('id') as number; //"type assertion"

/*
export class Attributes {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserProps): void {
    Object.assign(this.data, newData);
  }

}
*/
