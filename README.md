# How to create a library for Angular 2 - ng-conf 2016

### 1. Init the project
- Create a repository on Github:
	- Use the name of your library
	- Init with a readme, a license (MIT), and a .gitignore file (type node)

- Git clone that repository locally
- Go to that repository and type `npm init` // [Video](https://youtu.be/LHKrJGW_QX0)
	- For the name of your library: no spaces, no special characters (except dashes & underscore) and all in lowercase
	- Give the name of your library to the main file. Example: my-lib.js
	- Don't bother with the test command for now

- Install the dev dependencies for Angular 2: `npm install -D angular2@2.0.0-beta.15 es6-shim@^0.35.0 es6-promise@^3.0.2 reflect-metadata@0.1.2 rxjs@5.0.0-beta.2 zone.js@^0.6.11` (-D means save in package.json as a dev dependency)
- Add Angular 2 as a peer dependency in your package.json file
```js
"peerDependencies": {
  "angular2": "~2.0.0-beta.15"
}
```

### 2. Write a service
- Create a folder named `src`
- In this folder add a Typescript file for your service, the name of the file doesn't matter
- Write a simple service (don't forget to export it) // [Video](https://youtu.be/3miw5X6pUDA)
- Create a main Typescript file at the root named after your library and export * from your library // [Video](https://youtu.be/H_kZ7vLowBw)