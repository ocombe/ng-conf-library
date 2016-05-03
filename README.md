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

- Install the dev dependencies for Angular 2: `npm install -D @angular/core @angular/compiler @angular/common @angular/platform-browser @angular/platform-browser-dynamic es6-shim@^0.35.0 es6-promise@^3.0.2 reflect-metadata@0.1.2 rxjs@5.0.0-beta.5 zone.js@^0.6.12` (-D means save in package.json as a dev dependency)
- Add Angular 2 as a peer dependency in your package.json file
```js
"peerDependencies": {
  "@angular/common": "^2.0.0-rc.0",
  "@angular/compiler": "^2.0.0-rc.0",
  "@angular/core": "^2.0.0-rc.0",
  "@angular/platform-browser": "^2.0.0-rc.0",
  "@angular/platform-browser-dynamic": "^2.0.0-rc.0"
}
```

### 2. Write a service
- Create a folder named `src`
- In this folder add a Typescript file for your service, the name of the file doesn't matter
- Write a simple service (don't forget to export it) // [Video](https://youtu.be/3miw5X6pUDA)
- Create a main Typescript file at the root named after your library and export * from your library // [Video](https://youtu.be/H_kZ7vLowBw)

### 3. Typescript & typings
- Install Typescript & typings: `npm install -D typescript typings`
- Create 2 file at the root named `tsconfig.json` & `typings.json`
- In `tsconfig.json` write:
```js
{
  "compilerOptions": {
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "inlineSourceMap": true,
    "inlineSources": true,
    "declaration": true,
    "moduleResolution": "node"
  },
  "files": [

  ]
}
```
- In `typings.json` write:
```js
{
  "ambientDevDependencies": {
    "jasmine": "github:DefinitelyTyped/DefinitelyTyped/jasmine/jasmine.d.ts#dd638012d63e069f2c99d06ef4dcc9616a943ee4"
  },
  "ambientDependencies": {
    "es6-shim": "github:DefinitelyTyped/DefinitelyTyped/es6-shim/es6-shim.d.ts#6697d6f7dadbf5773cb40ecda35a76027e0783b2",
    "node": "github:DefinitelyTyped/DefinitelyTyped/node/node.d.ts#aee0039a2d6686ec78352125010ebb38a7a7d743"
  }
}
```
- In the file `tsconfig.json` edit the `files` property and add the following (rename `ng-conf-library` with the name of your lib): // [Video](https://youtu.be/dv7ml7LXuqM)
```
"./typings/main.d.ts",
"./ng-conf-library.ts",
"./src/service.ts"
```
- In `package.json` add a prepublish script with `typings install && tsc` // [Video](https://youtu.be/dv7ml7LXuqM)
- Test that script with the command `npm run prepublish` // [Video](https://youtu.be/dv7ml7LXuqM)
- Add a `typings` property in your `package.json` and add it the name of your main typings file (extension .d.ts) that was just created by your prepublish script // [Video](https://youtu.be/dv7ml7LXuqM)