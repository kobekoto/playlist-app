View individual videos from a select YouTube playlist onelin

## Installing a minimum environment toolset

* Install [NodeJS](https://nodejs.org/), which includes the Node Package Manager [NPM](https://www.npmjs.com/), 
by visiting the homepage and clicking on the install button in order to download 
and install the latest binary for your operating system.

Steps to running app:

* Install bower as well:

````
npm install -g bower
````

Install dependencies and devDependencies

````
npm install
bower install
````
Once dependencies and devDependencies are installed


````
# Run server
gulp dev
````

Once app is running in browser

Navigate to localhost:3000/#/

TODO:

* Fix root url issue
* Add pagination 
* Add testing
* Create minified production build, deploy to Heroku successfully

