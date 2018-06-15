[Previous Project](../10-giphy-api)

# My New Year's Resolution Site

![New Years Site](new-years.png)

[![](https://cdn.glitch.com/6d561a98-036e-47a6-b152-a2a66a73d13e%2FcodingPlay.png?1518516226601)](https://www.youtube.com/watch?v=c5Xd8xPBuOA)

## Here is a very short introduction to Node

When building the Web with HTML, CSS and JavaScript, you're building the *client-side* part of a site, the part that users who go to your app *see*. But there is a lot happening behind the scenes - for example, what happens when you enter a URL into your browser?

Turns out, a whole lot is happening! But what you should know *today* is that you are requesting a *server* somewhere to give you the app or site that is attributed to that address. And if you're building an app, those files live on a server somewhere!

Computer servers are kind of like servers in a restaurant - you request something and they should return what you requested. At a diner, for example, you may ask them for food, and eventually they return with food.

![illustration of a patron asking a server for food](https://cdn.glitch.com/6741fb3d-cca0-4001-9af2-db1e473675d2%2Fserverfood.png?1515111078955)

This is much like when you sit down to go surfin' the Web!

![illustration of a user requesting example.com from a server](https://cdn.glitch.com/6741fb3d-cca0-4001-9af2-db1e473675d2%2Fserver1.png?1515111079155)

When someone enters the URL of your app into their browser, or clicks on a link to it, a request to the server holding your app's files returns `index.html`:

![illustration of a server returning index.html to a user](https://cdn.glitch.com/6741fb3d-cca0-4001-9af2-db1e473675d2%2Fserver2.png?1515111079004)

Our HTML files reference static files like images and .css files, so we need to ask the server to also send us that!

![illustration of a server returning index.html to a user](https://cdn.glitch.com/6741fb3d-cca0-4001-9af2-db1e473675d2%2Fserver3.png?1515111078824)

And the server should oblige.

![illustration of a server returning index.html to a user](https://cdn.glitch.com/6741fb3d-cca0-4001-9af2-db1e473675d2%2Fserver4.png?1515111077065)

How does the server know to send `index.html`? Or static files like images? Someone has to write the *server-side code* to do that. And thanks to Node, an open source runtime environment, we can write that code in JavaScript! That's right, if you know JavaScript, you don't have to learn a new language to build a Node app!

### This app introduces two new files to give you more control of the server-side part of the app: package.json and server.js

If you don't have a `package.json` configuration file, Glitch assumes you're building a static site and does all the server-side magic for you - so going to an static glitch app URL will trigger the Glitch app server to send `index.html`. But perhaps you want to have more control of what your app can do...well, if you've got a Node server you can do that, and Glitch provides you one for free!

### Let's take a look at package.json, our configuration

The powerful part of this file is where we tell how to run the Node app:

```
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
```

This is JSON, or JavaScript Object Notation. We are telling the Node runtime that there is a file `server.js` that contains the server-side JavaScript, which handles what to do when someone enters our app URL into their browser. Note: you can name this file whatever you prefer to name it, but it should be clear it's not client-side JavaScript for readability purposes.

As you write more apps, you'll find that you need more packages of code to build your app, and you can list those in this file under `"dependencies"`. In this app, and many Node apps on Glitch, we have a dependency of [Express](https://expressjs.com/), which is a framework that allows us to write less code to do more things for Node. Frameworks for Web languages are kind of like slang or shorthand for speaking languages - they can make writing code easier but sometimes when you see JavaScript written in a framework you've never used, you may think you're reading an entirely different language! This is one of the most frustrating, yet exciting, things about JavaScript!

### server.js is where we write the code explaining what to do when someone goes to our app

Since we have a `package.json` file, we need to have code that says what to send to the user when they go to our app. We create our app by importing express and assigning it to a variable. We use `require` to import it:

```
// init project
var express = require('express');
var app = express();
```

Remember, we're still writing JavaScript, so you'd still use the same syntax, such as for comments, as you saw/did in [first-app-js](https://glitch.com/edit/#!/first-app-js)!

There are many ways to structure your files in a Node app. I like to put my HTML files in a `views` folder, since those are the pages that a user sees/views. I also have a `public` folder for static files that are referenced in our views, like `app.js` and `style.css`. I don't want to have to update all my html files to reference `/public/style.css` so I can keep it as `style.css` by telling our Express app, `app`, that `public` is a static folder:

```
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

```

And the most important part of the Web are links, or routes. We need to send that `index.html` view when a user goes to our site's root URL or `'/'`. This is considered a "get" request because it's requesting to get some kind of file or thing.

```
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
```

### Sometimes GET requests send more than just views!

When things are done on the server, it's a lot faster and more efficient, as servers are typically more powerful than a user's browser. Sometimes we do data manipulation, calculations and other powerful things the user doesn't need to see in action there - and then we can send it when the user wants it.

In this app, we have a new `resolutions.json` file which is JSON (like our package.json) containing info about resolutions. We can send this to our client-side JavaScript by adding another GET request. This is called an endpoint, because you're creating a URL that you may or may not allow anyone to access to get some kind of info. Lots of services have endpoints that developers can access to get information to power their apps - some include Twitter, Slack, Weather.com, and so many more.

```
// get our resolutions json
var resolutions = require('./resolutions.json');

// here's an endpoint that will return our resolution info
app.get('/resolution-data', function(request, response) {
  response.send(resolutions);
});
```

So above, in `server.js`, we import our JSON like we imported the Express package. Then we added a get request so that going to `'/resolution-data'` will return to whoever made that request the contents of `resolution.json`.

### Writing client-side JavaScript to talk to the server is possible!

In first-app-js we made it so we don't have to manually update the date. We can use the data from the server so that we don't have to manually update our resolutions status! We have to, in `app.js` make a request to that endpoint we created in `server.js`.

Now, a fair warning, the code you're about to see may be quite overwhelming. Even as someone writing JavaScript for many years, I constantly have to look up the syntax to do this - and "this" is AJAX, or Asynchronous JavaScript and XML. AJAX is a set of techniques for making requests to the server from the client-side. Let's take a look at what is added to `app.js`:


```
const resolutionsRequest = new XMLHttpRequest();
resolutionsRequest.addEventListener('load', resolutionsRequestListener);
resolutionsRequest.open('get', '/resolution-data');
resolutionsRequest.send();
```

So what's happening here is I created an XMLHttpRequest object. To that, I added an event listenter (remember those!) that says to call a function named `resolutionsRequestListener` as soon as the XMLHttpRequest has been given data by the server. Then we open that 'get' request and say to go to `/resolution-data`.

So you'll notice in the source that I've created that `resolutionsRequestListener` function. When the request object loads with data, what the server sent back is `this.responseText` which should contain the contents of `resolutions.json`. Then we parse the JSON and we can get info like length or access the contents of it.

In this app, I chose to say that I've met my resolutions if I added the same number of days to `resolutions.json` as there are days that have passed in the month - then I set the contents of our status element:

```
const resolutionsRequestListener = function() {

  // set our status to yes or no based on if there are updates for  each day so far
  const resolutionsData = JSON.parse(this.responseText);

  // if we have the same number of objects as the days that have gone by,
  // it's a safe assumption that we are keeping our resolution
  const statusElement = document.getElementById('status');

  if ( resolutionsData.length == day ) {
    statusElement.innerHTML = 'yes!';
  }
  else {
    statusElement.innerHTML = 'no';
  }

}
```

## Resources

- [NodeJS documentation](https://nodejs.org/en/docs/)
- [MDN's introduction to Express/Node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Nodeschool page on Glitch](https://glitch.com/nodeschool)



ヽ(๏∀๏ )ﾉ

## What files are in this project?

### assets

This is a folder where you can upload assets like images. This project has an illustration of books because the example resolution has to do with reading.

### ← README.md

This file you're reading is a file written in Markdown - which is shorthand for HTML. Developers use README files to describe what their project is, along with any other info they have for contributors and users. In this project's README.md file, we talk about what the project is and list the files that are within it. You should keep this file up to date as you add features and pages to your app!

### ← index.html

This is the home page of our app and it's written entirely in HTML. Keep it updated to let users know what the date is and if you're achieving your resolution goals or whatever status you want to track this month!

### ← about.html

This is another HTML page that we link to in `index.html`. In it, talk about what your resolution is and anything else that you want your audience to know about you and your goals this year!

### ← style.css

This file contains the CSS (Cascading Stylesheet) styling markup code for making our HTML content look nice.

### ← app.js

This file contains the JavaScript that allows us to programmatically get the current date and place it onto the page so we don't have to edit that part of `index.html` every day.

### ← package.json

This file contains all the configurations for our Node app, including how to start running it from our new server side code, which can be found in `server.js`...

### ← server.js

This file contains the Node JavaScript for our server. It also includes an endpoint we can request to get our resolution status updates.

### ← resolutions.json

This JSON (JavaScript Object Notation) file contains objects we add for every day we meet our resolution. We've updated our client-side code to request this info from the server so we can automatically update our app without hard-coding "yes" or "no".
