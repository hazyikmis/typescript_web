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
- npm install --save json-servercreate ""db.json" file, and fill the file with dummy data
- open the "package.json" file, remove the "test" under "scripts". Add:"start": "json-server -p 3001 -w db.json"
- npm start
- NOW YOU CAN SEND RESTFUL API CALLS TO THE SERVER...(You can add, delete, update, list the records in the "db.json")
