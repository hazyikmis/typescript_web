import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

//Previously, fetch and save methods were in the User class

//first, design/refactor this class according to Option #1 (zzz_info/09_3_options...)
//then, convert this class to "generic" class!
export class Sync {
  constructor(public rootUrl: string) {}

  /*
  fetch(id: number): void {
    axios
      .get(`${this.rootUrl}/${id}`)
      .then((response: AxiosResponse): void => {
        //this.set(response.data);  //this "set" function is implemented in class User!!!
        //If we re-evaluate the situation, fetch method should be responsible for only fetching! not updating the fields of user instance
        //Because of that, we are changing the level of delegation!!!
      });
  }
  */
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      //put - update user
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post - create new user
      return axios.post(this.rootUrl, data);
    }
  }
}
