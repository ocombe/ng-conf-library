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
