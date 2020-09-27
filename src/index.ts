/*
import axios, { AxiosResponse } from 'axios';

axios.get('http://localhost:3000/users').then((response: AxiosResponse) => {
  console.log(response.data);
});
*/

/*
import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

collection.on('allUsersLoaded', () => {
  console.log(collection);
});

collection.fetch();
*/

//After Collections class converted to generic class (with T & K and deserialize function)

import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

//PROBLEM IS: Every time we created a collection, we do not want to send rootUrl, and define the deserialize function!
//Maybe best place to create collection is User Class!!!
const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

collection.on('allUsersLoaded', () => {
  console.log(collection);
});

collection.fetch();
