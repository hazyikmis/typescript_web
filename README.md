# Running TypeScript in the browser

> parcel-bundler npm pack helps us run typescript in the browser!

```
npm install -g parcel-bundler
```

We will include "ts" files names as scripts (inside script tag) in the index.html. Normally only "js" files allowed but parcel bundler helps us converting them to "js" files and replace these ts files.

```
<body>
  <script src="./src/index.ts"></script>
</body>
```

When running the app:

```
parcel index.html
```

# JSON Server

https://github.com/typicode/json-server

Get a full fake REST API with zero coding in less than 30 seconds (seriously)

https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

--Very similar to JSONPlaceholder (https://jsonplaceholder.typicode.com/)
But json-server has EXTREMELY STRICT ADHERENCE to RESTFUL CONVENTIONS (REST Convention: Standardized system for designing API's)

Usage:

- create a dir, for example "apiserver"
- inside "apiserver" dir, run the command "npm init"
- npm install --save json-server
- create ""db.json" file, and fill the file with dummy data
- open the "package.json" file, remove the "test" under "scripts". Add:"start": "json-server -p 3001 -w db.json"
- npm start
- NOW YOU CAN SEND RESTFUL API CALLS TO THE SERVER...(You can add, delete, update, list the records in the "db.json")

NOTE: If you install with "npm install -g json-server" (globally) then you can call/run "json-server" directly from another terminal (without dealing with package.json):

```
$ json-server -w db.json
```

> Format of db.json:

```
{
  "users": []
}
```

# Basic Structure

In one of the terminal windows, json-server is running(installed with -g, executed by "json-server -w db.json" command), in the another window, parcel is running (parcel index.html). By doing like that, we have installed very simple example of server/client structure.

Or you can add "scripts" section like below into the package.json. And then, on one of the terminals execute "npm run start:db" and on the other "npm run start:parcel"

```
"scripts": {
  "start:db": "json-server -w db.json",
  "start:parcel": "parcel index.html"
}
```

# In TypeScript, strings can be types!

```
type BestName = 'halo';
const printName = (name: BestName): void => {
  ...
}
printName('emo'); // X
printName('yamo'); // X
printName('halo'); // OK

```

> check the code below (Attributes.ts, Attributes1.ts.bak): REALLY IMPORTANT!

```
//check: /zzz_info/10 & 11
//K is generic constraint; If T is UserProps type then K could be only name, age and id, because its one its (T's) keys
//Do not forget: K & T are "types", and T[K] is "string" or "number" or whatever type of real key

get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
}
```

# Accessors & Getter methods in JS

WE CAN DEFINE FUNCTIONS AS "GETTER" IF THEY ARE USED FOR JUST RETRIEVING DATA, NOT FOR CHANGING SOMETHING

```
class Person {
  constructor(public firstName: string, public lastName: string) {}

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  //same function above, but it's getter from now on!, and when calling it, no need to append () at the end;
  get allName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('first', 'last');
console.log(person.fullName());
console.log(person.allName);
```

("get" keywords converts the method to a property!)

# More on Accessor & Getter methods:

IF NOT defined as getter/accessor function, then its strongly dependent on the how "on" defined in Eventing class.
If something changes in the definition on the "on" function, all classes like this using on from Eventing, must be changed.
Pain in the ass.

```
  on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback);
  }
```

Here is the solution:
Anytime someone references this on property I will return "this.events.on".
Now notice how I'm NOT calling "on" here. So the real leap of faith you need to make here
the real important thing to understand is that I am NOT trying to call a function right here.
Instead I'm trying to return a reference to the "events.on" method.

("get" keywords converts the method to a property!)

```
  get on() {
    return this.events.on;
  }
```

# ATTENTION on "this" when using Accessor & Getter methods:

```
const colors = {
  color: 'red';
  printColor() {
    console.log(this.color)
  }
}

//NO PROBLEM, "this" REFERS TO "colors"
colors.printColor();

//HERE IS THE PROBLEM:
//reference to "colors" lost
const printCol = colors.printColor;
printCol();  //try to execute "undefined.printColor()"
```

SOLUTION: Define "printColor" function as an "ARROW FUNCTION" inside "colors" class/object

# Applying changes on .gitignore

> Sometimes changes on the .gitignore "ignored" by git. If you add new folders and/or files to .gitignore, but git still continues tracking them, then you can execute the commands below:

```
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```
