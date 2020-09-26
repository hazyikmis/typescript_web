import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  //K is generic constraint, If T is UserProps type then K could be only "name", "age" and "id", because its one its (T's) keys
  //Do not forget: K & T are "types", and T[K] is "string" or "number" or whatever type of real key
  //get<K extends keyof T>(key: K): T[K] {
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(newData: T): void {
    Object.assign(this.data, newData);
  }

  getAll(): T {
    return this.data;
  }
}
