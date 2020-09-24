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

# Applying changes on .gitignore

> Sometimes changes on the .gitignore "ignored" by git. If you add new folders and/or files to .gitignore, but git still continues tracking them, then you can execute the commands below:

```
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```