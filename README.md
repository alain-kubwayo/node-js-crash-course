# node-js-crash-course
This repo serves as a documentation of key concepts I learned while following The Net Ninja's `Node.js Crash Course Tutorial` on [YouTube](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
## Modules & File System

Basics of Node

* Run code using Node on our computer using `node filename`
* Global object and different methods and properties available
* Node module system to import and export things to and from different files
* `File System` core module
* Create streams for reading and writing large amounts of data

## Creating Server

* Require `http` module
* Look at `request` object
* Look at `response` object
* Return `HTML` pages
* Basic routing
* Status Codes
* Redirects

## Express

* Express: A framework that helps to easily manage our routing, requests, server-side logic, and responses in a much more elegant way and makes our code easier to read and update and extend. `npm install express`
* Create an express app
* Routing & `HTML` pages
* Redirects & 404 pages

## View Engines

* EJS: Embedded JavaScript templating engine: `npm install ejs`
* Using view engine/template engine to inject dynamic data
* EJS view engine (install with `npm install ejs`)
* Passing data into views
* Partials to keep the code organized and maintainable 
* Adding CSS

## Middleware

* What is a middleware? Code which runs (on the server) between getting a request and sending a response. `app.use(func)` is generally used to run some middleware code (can also be used to handle 404 request). You could also have more than one piece of middleware that runs on the server. Like `app.use(func)`, `app.use(func)`, `app.use(func)`. ! The functions that run in our get handlers are also essentially middleware. The `use` method runs for every type of request to all routes including `POST` requests. Middleware runs from top to bottom in our code until we exit the process or explicitly send a response to the browser.
* Middleware examples
    * Logger middleware to log details of every request
    * Authentication check middleware for protected routes
    * Middleware to parse JSON data from requests
    * Return 404 pages
* Creating custom middleware(s)
* Using `next()` (the browser hangs => next() used to tell Express to move on)
* 3rd party middleware: made for us so we don't have to create our own if they already exist. E.g. `morgan` which can be installed with NPM like so,
`npm install morgan`
* Static files (images, CSS) with `app.use(express.static('public'))`
### PS
* `npm init` to generate a `package.json` file
* `npm install express`
* `npm install -g nodemon` to install `Nodemon` for auto-loading the server on every live changes made on the files