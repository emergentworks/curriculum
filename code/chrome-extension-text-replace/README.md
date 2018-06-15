[Next Project](../chrome-extension-tutorial-image-replace)

This is hosted as [glitch](https://women-not-females-start.glitch.me/) project but you can adapt it for github / just a folder on the computer. Let the students choose the text to replace!

# women-not-females-extension

This is a sample text-replacer chrome extension that replaces 'females' with 'women' on twitter. This is the final product of a chrome extension workshop taught at [Afrotectopia](https://www.afrotectopia.com/).

- Slides from the beginning of the workshop are [here](https://www.slideshare.net/OmayeliArenyeka/building-a-chrome-extension-workshop-at-afrotectopia)
- [Examples of chrome extensions that have activist elements](https://www.are.na/omayeli-arenyeka/activist-themed-chrome-extensions)

## Workshop Instructions

1. Create a manifest.json file in a folder called src. On the left, click new file and then enter `src/manifest.json`. All chrome extensions require a manifest.json file. This file includes information about the extension (like name and description), sets its permissions (what things it has access to, e.g website, new tab), and references all the JavaScript, CSS, and other files associated with the extension.

2. Copy this into the file. 
  ```
  {
    "manifest_version": 2,
    "name": "No more 'females'",
    "description": "Replaces the word females with women on twitter.",
    "version" : "1.0.0",
    "permissions": ["https://twitter.com/*"],
    "content_scripts": [
      {
        "matches": ["https://twitter.com/*"],
        "js": ["content.js"]
      }
    ]
  }
  ```
  - Manifest version: The [manifest_version](https://developer.chrome.com/extensions/manifestVersion) should always be `2`
as this is the current manifest specification by Google. This is something Google dictates you include.
  - Name is the name of your extension and description is what it does.
  - No need to worry about version right now this we aren't releasing this.
  - Permissions is a way of telling the user and Google what your extension does and what it needs to do that. For our extension we only need permission for twitter.com but you can get permissions to [lots of things](https://developer.chrome.com/apps/declare_permissions) like the audio from the user's microphone, what the user copies and pastes, what they screenshot.
  - A content script is a piece of JavaScript code (which can also include and reference CSS) that runs after the page loads. It has full access to the [DOM](Introduction to the DOM - Web APIs | MDN) (all the objects that make up the web page) so you can do things like alter content, styles, layout, images, anything that is on the page. The manifest.json file should reference your content script.
  - You also need to specify which URLs the content script should run on. We want our extension to work only on twitter so we add `"matches": ["https://twitter.com/*"]` which means it will only run if the url matches the one we indicated. 
  - The `*` at the end means it will match all paths on that domain, so anything that starts with `https://twitter.com/` e.g `https://twitter.com/i/notifications`, `https://twitter.com/i/search`
  - If you wanted your extension to run on _all_ sites (although doing that is generally not advised) then it would be something like this:
  ```
    "matches": [
          "<all_urls>"
        ]
  ```

3. So our `manifest.json` references a content script but we have none yet so go ahead and create a `content.js` file in the src folder.

4. Copy this in. 
```
  (function() {

  })();
```
- This is called a self-invoking function in JavaScript (or Immediately Invoked Function Expression). That means the code in it runs as soon as it's loaded. You don't have to call it. So, when someone downloads our extension and their page is loaded, whatever code we write in there will 
automatically run.

5. So what do we want to do? We want to get all the tweets and remove instances of the word 'females.' To do that we need to get the tweets. Twitter gives all tweets the classname `.tweet-text` so first we can use that to get all the tweets on the page. Copy this into `content.js` to get all the tweets on the page:
`var tweetContent = document.querySelectorAll('.tweet-text');`
6. Next, we want to go through all the tweets, find the instances of the word 
'females' and then replace them. So to do that: JavaScript has a method called `forEach` that goes through each item in an array. An array is a list of things. For example you can have an array called `thingsILove` and that would look like this: `const thingsILove = ['my bed', 'my momma'];`
```
  // Get all tweets
  /* Twitter gives all tweets the classname `tweet-text` so   
   * document.querySelectorAll is getting all the tweets on the page.
   * [].slice.call is converting the list of tweets into an array we can go        * through
   */
  var tweetContent = [].slice.call(document.querySelectorAll('.tweet-text')); 
  
  // Then go through all tweet and replace 'females' with 'women'
  tweetContent.forEach(function(tweet){
    var newContent = tweet.innerHTML.replace(/females/g, 'women');
    // If the new content is not the same as the old, then replace
    if (newContent != tweet.innerHTML) { 
      tweet.innerHTML = newContent;
    }
  });
```
- The [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property is used to get and set all the descendants of that element including text. 
- `/females/g` is an example of a regular expression. A regular expression is a sequence of characters that define a search pattern. You can try some out [here](https://www.regexpal.com/?fam=102780)
- Email regex: `^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$` (will search for strings that match an email pattern. 
7. Now let's test it out! Search the word 'females' on twitter or you can just navigate [here](https://twitter.com/search?q=females&src=typd).
8. Navigate back to your glitch project. Click 'women-not-females-start', go to 'Advanced Options' then click 'Download project.' If you want to try it out but you aren't there yet with your code you can do the same thing from my [version of the finished project](https://glitch.com/edit/#!/women-not-females-final).
9. Unzip the downloaded file (you just have to click it)
10. Then type in `chrome://extensions` in your address bar.
11. Make sure 'Developer mode' is checked. Then click load unpacked extension and upload the `src` folder in the folder you just unzipped.
12. Go back to twitter search for 'females' and reload the page. No more 'females'!


### Part 2

Turning the extension on and off!

A browser action is a button that your extension adds to the browser's toolbar.  So if you lok at your toolbar, to the far right, the icon for 'No more females' should be there. Browser actions can’t access the DOM itself (so they can't do any manipulation) but they can communicate with the content script via the chrome “messaging” API. We're going to use it to tell our content script when to do the replacing and when not to.

A browser action should have an icon (for the button) as well as a JavaScript file for the code.

1. Copy this into your `manifest.json`

```
  "browser_action": {
    "default_icon": "logo.png"
  },
  "background": {
    "scripts": ["background.js"]
  }
```
2. Add a listener for when the icon is clicked.

```
// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
}
``` 
3. So we want to know whether we should do the replacing or not. If the extension is paused, we don't do replacing, if it isn't we replace. Copy this into the `buttonClicked` function. 
```
function setPaused(paused) {
  localStorage.setItem('paused', paused);
}

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
  state = localStorage.getItem('paused') == 'true'
  setPaused(!state);
  chrome.tabs.update(tab.id, {url: tab.url}); // reload the page
}
```
- localStorage is the browser's storage so like any storage we can put things in it. So, we store if the extension is paused or not (by default it isn't). 
- Then we reload the page using `chrome.tabs.update`

4. So we know when the extension is on we can use a badge — a bit of text that is layered over the icon to tell us if the extension is 'ON' or 'OFF'

```
function updateBadge(paused) {
  badge_text = paused ? "OFF" : "";
  chrome.browserAction.setBadgeText({text: badge_text});
}

function setPaused(paused) {
  localStorage.setItem('paused', paused);
  updateBadge(paused);
}
```
5. To sum it up, if the user clicks the icon, we set paused to false which means the extension should be replacing. Then we reload the page. 

6. And by default the extension is off. 
```
localStorage.setItem('paused', true);
updateBadge(localStorage.getItem('paused'));
```

7. When the page is reloaded, the content script is run so before we do anything, we send a message to the browser action asking what the status is.

```
  chrome.runtime.sendMessage({name: "isPaused?"}, function(response) {
    if (response.value != 'true') { // If it's not paused replace!!
      replaceWord();

      document.body.addEventListener('DOMNodeInserted', function(event) {
          replaceWord(event.target);
      });
    }
  });
```

8. The browser action will be listening for a message and will send the status.
```
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.name == "isPaused?")
    sendResponse({value: localStorage.getItem('paused')});
});
```
9. Now lets reload our extension and see if it works!

## Resources

1. Learnt a lot from this one -> [Chrome Extensions (and Bookmarklets) by Daniel Shiffman](http://shiffman.net/a2z/chrome-ext/)
2. [Chrome Extensioning](https://gist.github.com/caseywatts/99e7412e9bc6ae858fd1)
3. [How to Create and Publish a Chrome Extension in 20 minutes](https://medium.freecodecamp.org/how-to-create-and-publish-a-chrome-extension-in-20-minutes-6dc8395d7153)


## 📦 How to use
Install the extension locally as an unpacked extension:
 1. Save this repo somewhere
 1. Go to `chrome://extensions`
 1. Make sure the `Developer mode` checkbox is checked
 1. Click `Load unpacked extension...`, and navigate to the `src` folder in this thing that you cloned
 1. Refresh any applicable pages you have open
 1. 💰💰💰

## Structure
There are 2 files that you care about in the `src` folder:
 * `manifest.json` is where the settings for your extension are. In particular, 
 the `content_scripts` values mean "what files this extension runs". `matches`
 represents which pages the extension applies to. The more general the better
 (something that applies to every page on the internet ever is a bad idea in general)
 * `content.js` is a script that runs in the background, when the 
 extension loads. If you need to move/create DOM, this is where you would do it.
