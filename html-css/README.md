# HTML & CSS

### Objectives

We have split this milestone into 3 objectives:

  - [Objective A: Be able to read and write basic HTML and CSS](#objective-a-be-able-to-read-and-write-basic-html-and-css)
  - [Objective B: Understand how websites are rendered on a browser](#objective-b-understand-how-websites-are-rendered-on-a-browser)
  - [Objective C: Gain general coding habits](#objective-c-gain-general-coding-habits)

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

1. Help the mentee download or start using a code editor tool. Check out [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), or [VS Code](https://code.visualstudio.com/). Make sure they know how to access that code editor on their own time. **Tip:** A good activity to try is having them create a new file and have them take notes in it. This could help them get comfortable using an editor without needing to know how to code.
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
* There are many special characters in code that are not widely used elsewhere. Be sure to cover where keys like `<, >, (, ), [, ], {, }, \, /` are found on the keyboard.
* Nesting can be a hard concept to pick up as a beginner.

#### Side-Quest: Website with only HTML
TODO

#### Side-Quest: Buggy Files
TODO

#### Side-Quest: Adjust CSS in the Browser
TODO

#### Side Quest: Code Pen Exploration
TODO


## Objective B: Understand how websites are rendered on a browser

Whether rendering a website on a phone or a computer, the process of accessing a public web address is very complex, and it's okay not to understand the entirety of it. This objective is meant to help the mentee get a better grasp on how the Internet works. This also serves as a *baby step* before learning about requests/reponses and status codes (which will be used in the Javascript milestone). Think of this as an advanced version of digital literacy.

#### Side-Quest: Path to Local files
TODO

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

