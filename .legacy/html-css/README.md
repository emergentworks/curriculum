---
layout: default
title: leacy HTML & CSS
nav_exclude: true
---
# HTML & CSS

### Objectives

We have split this milestone into 3 objectives:

  - [Objective A: Be able to read and write basic HTML and CSS](#objective-a-be-able-to-read-and-write-basic-html-and-css)
  - [Objective B: Understand how websites are rendered on a browser](#objective-b-understand-how-websites-are-rendered-on-a-browser)
  - [Objective C: Gain general coding habits](#objective-c-gain-general-coding-habits)

Here are two activities to complete:
  - [Personal Website](personal-website.md)
  - [Git and Command Line](git-command-line.md)

#### How to navigate these objectives?

The 3 objectives should be treated as equally important to each other. We recommend tackling these objectives by working on one project (e.g. [personal website](personal-website.md)).

In this document, we include some small activities and homework that can be assigned to the mentee. **Balance is key to making sure we give the mentee confidence in their programming and tech knowledge.** In the standard 4 weeks given to reach this milestone, as a mentor, you should break down what activities and homework to assign for each of your sessions. Here is an example of how that could look:

| Week # | Objective A | Objective B | Objective C | Homework |
| --- | --- | --- | --- | --- |
 | 1 | `head`, `body`, `<h1>`, `<p>` | [Rendering Local files](#side-quest-path-to-local-files) | Go over uncommon keyboard keys and saving files in a code editor | [Code-Academy Learn HTML](https://www.codecademy.com/learn/learn-html)
 | 2 | divs, bullets, images, tables | [Browser Inspector](#side-quest-browser-inspector) | Git + GitHub basics | [Code Academy Learn CSS](https://www.codecademy.com/learn/learn-css) |
 | 3 | CSS coloring, font imports, positioning | [CSS in the browser](#side-quest-adjust-css-in-the-browser) | Start using adding and commiting to GitHub repo | [Git explaintion](https://www.youtube.com/watch?v=wpISo9TNjfU)
 | 4 | Multi-page, continue with CSS | | | Finish personal website

Feel free to create your own weekly breakdown by copying this [Google document](https://docs.google.com/document/d/1Zygryvkew4E27Ju-lZoAdm8-QWO59pjmE9szkaPrmAM/edit?usp=sharing).

***

## Pre-requisites

1. Help the mentee download or start using a code editor tool. Check out the [environments page](../resources/environments.md) for recommendations. **Tip:** A good activity to try is having them create a new file and have them take notes in it. This could help them get comfortable using an editor without needing to know how to code.
2. Coordinate with your mentee on how you plan to pair program. Will you be using screen-share (Zoom or Hangout)? Will it be through VS Code's live coding?

## Objective A: Be able to read and write basic HTML and CSS

[Here](html-css-checklist.md) is a checklist to of basic HTML and CSS syntax to cover during this milestone.

#### Basics
This objective covers any comprehension or learning of HTML and CSS syntax. Some basic questions to start with includes:
* What exactly is HTML and CSS used for AND not used for? How are they different?

Here are some references of how to introduce these topics:
* [Code.org](https://studio.code.org/s/csd2-2019)
* [W3 School](https://www.w3schools.com/html/html_intro.asp)

Some things to be mindful of:
* Not every syntax needs to be memorized. It's important to teach the mentee to learn how to find the code they need through Google searches.
* There are many special characters in code that are not widely used elsewhere. Be sure to cover where keys like `<, >, (, ), [, ], {, }, \, /` are found on the keyboard. [Here is a helpful document](https://docs.google.com/presentation/d/1N5GND3T-LMsIPBiBkkdB4-4JZc3Pa9VxikRTDWmik3w/edit?usp=sharing) to visualize where thse special keys are found on the keyboard.
* Nesting can be a hard concept to pick up as a beginner.

#### Side-Quest: Website with only HTML

What does a website look like without any styling? What does HTML look like by itself? Follow a tutorial [here](https://css-tricks.com/that-time-i-tried-browsing-the-web-without-css/) to see what websites look like when you disable CSS through the browser.
#### Side-Quest: Buggy Files

* Preparation: Create a HTML project or fork your mentee's project. Remove or move some parts of the HTML or CSS. This can be making the layout of the website "buggy" or changing some aspects of the site that would be easy to spot. You can iterate this a couple times.

Give your mentee a link to the "working" site. With each iteration you have of the website, have your mentee spot the removed or moved code. See if they can fix the bug to restore it to the "working" version.

An example of this activity can be found [here](https://glitch.com/@ashleychen/computer-vomits) where `cv-endgame` is the "working" site.

#### Side-Quest: Adjust CSS in the Browser

While working on a project with CSS, try opening the browser inspector with your mentee. Figure out:
* How can I add or change CSS fields using the inspector? What happens when I refresh the page? Does the CSS changes disappear?

Go to a popular website like Google.com. Try changing some HTML or CSS on the browser. Can you figure out:
* What font does Google use on their homepage?
* Can you change the words "I'm feeling lucky" to "Gimme random search"?
* Can you change the background color to yellow?
* What sort of things are not adjustable with CSS? Can you adjust the logo image to another picture?

#### Side Quest: Code Pen Exploration

CodePen.io is a great website to find what other people have done with web development code.

1. Go to codepen.io and find a popular project (can be found under `trending`). For [example](https://codepen.io/argyleink/pen/poEjvpd)
2. Explore how the site works. Are there three columns? What languages are used to create the project? What happens when you remove some CSS?
3. Try copying and pasting a project that uses only HTML and CSS to your personal website. Usually, this results in the project beomcing buggy or unaligned on your website; Why is that?
4. Are there parts of the code that were copied/pasted that are confusing or foreign?

Spend some time looking for new CSS styles or a project that is interesting to you. Break down how the project is made and figure out what might be confusing or unknown to you. If possible, apply the new things you learned to your personal website.


## Objective B: Understand how websites are rendered on a browser

Whether rendering a website on a phone or a computer, the process of accessing a public web address is very complex, and it's okay not to understand the entirety of it. This objective is meant to help the mentee get a better grasp on how the Internet works. This also serves as a *baby step* before learning about requests/reponses and status codes (which will be used in the Javascript milestone). Think of this as an advanced version of digital literacy.

#### Side-Quest: Path to Local files

This side-quest teaches how to develop a website on your local environment.
1. Create or open a `index.html` file. You can do this by using a text ediitor and saving a new file with that name.
2. Add the line `Hello World` to the file.
3. Either drag the file to your browser's icon or right-click on the file and click `open as` -> your browser. Tada! You can now render your `html` file!
4. Don't close your browser window yet! Add some more text to the file like `This is my first file`. Save your file and go back to your browser. Refresh the page to see if the new text appear on the page. Some questions to ponder:
  * What the URL or web address of this file?
  * If I don't save the file after modifying it, will it show up on my browser when I refresh the page?
  * What other files can my browser render? Image? Word/Excel document? mp3 file?

#### Side-Quest: Files on a Browser

* What happens when you save a webpage? Try downloading the HTML of a google.com onto your local computer
* If you open that file in an editor, it’s just code. How does a browser render text, fonts, images, etc. rather than just display the code?
* Introduce the concept of a renderer or a compiler (rabbit hole [here](http://taligarsiel.com/Projects/howbrowserswork1.htm#The_browsers_we_will_talk_about))
  * Tip: Explain how this any programming language or code essentially needs an interpreter or compiler to convert logic into something else. Whether it’s a web interface, robotic instructions, or an elevator button, the idea of a converter exists in all programming languages.
  * Edit the HTML file. What happens when you try to change the words “I’m feeling lucky” to something else?
  * Homework assignment:
    * [Video](https://www.youtube.com/watch?v=7_LPdttKXPc) explaining how the Internet works
    * Extra: [Video](https://www.youtube.com/watch?v=TNQsmPf24go) on how the Internet is connected with cables under water.

#### Side-Quest: Browser Inspector

* Tip: Try to have the mentee drive the whole
* Right click to inspect
    * Try changing a word directly in a browser. What happens when you refresh the page? Does it disappear?
* Explain all the tabs:
    * Element inspect (how can we inspect styling and change values on)
    * Console tab, and the browser environment running Javascript that has access to the page
    * Network tab, and how files get loaded in
* Find a website that the mentee is familiar with, and dissect the resources and scripts that are run when rendering the homepage. Document this on a Google doc.


## Objective C: Gain general coding habits

This is generally the hardest objective to complete. We rely heavily on mentors to teach mentees *good* coding practices. This includes:
* Getting comfortable asking questions (even the "dumb" questions)
* Learning good naming conventions
* Referring to code by line numbers
* Debugging process (e.g. effective wording to search for answers on a search engine)
* Commenting and documenting code
* Getting comfortable not knowing everything about a language or a tool.

We've found that while tackling Objective A, it's helpful for the mentor to be super picky about the way a mentee writes their code. Comments about naming, case-sensitive differences, space/tabs, and formatting code based on their lanauges are in the best interest of the mentee to develop good coding habits for the future.

#### Side-Quest: Find Using Keyboard Shortcuts

* Find a website like W3school or even the EmergentWorks glossary and use the keyboard shortcut to find specific words.
* If using VSCode, learn the difference between searching in a file and searching in a whole directory. Encourage using command/control + F.
* Homework Assignment:
  * Go to [https://en.wikipedia.org/wiki/Brooklyn_Bridge](https://en.wikipedia.org/wiki/Brooklyn_Bridge) and determine how many times the word `Brooklyn` appears on the page.

#### Side-Quest: Internet Complex
TODO

