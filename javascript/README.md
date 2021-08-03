# Javascript && Developer Mindset

### Objectives

We have split this milestone into 3 objectives:

  - [Objective A:  Be able to read and write basic Javascript or any other object-oriented programming language.](#objective-a--be-able-to-read-and-write-basic-javascript-or-any-other-object-oriented-programming-language)
  - [Objective B: Have a grasp on a healthy coding mentality.](#objective-b-have-a-grasp-on-a-healthy-coding-mentality)
  - [Objective C: Able to communicate their understanding of how modern web applications work in the industry.](#objective-c-able-to-communicate-their-understanding-of-how-modern-web-applications-work-in-the-industry)

There is one required activity to complete:
  - [Chat Bot](chat-bot.md)

#### How to navigate these objectives?

These three objectives are meant to be done in parallel with each other. However, Objective A and B have higher priority over Objective C.

Under each objective, there are side-quests and independent work that allows for additional activities outside of the chat bot project.

## Objective A:  Be able to read and write basic Javascript or any other object-oriented programming language.

We simply want to get started with reading and writing in a modern programming language. This is their foundation to future projects and opportunities so be sure to not rush this section. **This section is not intended to teach them everything about programming languages.** Instead, we want to ensure that they can confidently learn on their own in the future. The most important topics to cover:
* Mutability
* Types
* Arithmetic operators
* Conditional statements
* Arrays
* Functions
* Class and Objects

You can find exercises [here](exercises/README.md) that introduces each of these topics.

Here are some more exercises and resources to help guide this objective:
* [learnJS](https://www.learn-js.org/)
* [Javascript Hero](https://www.jshero.net/en/success.html)
* [Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming#variables)
* [FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript)

#### Side-Quest: Code Construction

This side quest simulates a program that calculates the cost of shipping a package. As the cost of shipping gets more complicated, this exercise introduces ways to tweak the program from using just for-loops to creating functions and classes. Link [here](https://gist.github.com/ashley/4c8300e9ef980af3e3966f41ebed3f95).

#### Side-Quest: Debug by hand

Let’s focus on managing states of different variables in our head by writing them out. Make a copy of this [word doc](https://docs.google.com/document/d/1-701t2hRIREe-7UDSFvI4P6_fv2h0xQ8cxcH85a8MtM/edit?usp=sharing) and without running any code, complete the worksheet.

#### Side-Quest: Lyrics Repeater
This side quest is to help grasp the idea of analyzing strings by using arrays and objects. The end result should be:
1. Be able to pass in a body of text (lyrics) to a program.
2. Count the unique number of words used in the text.

This can be used to rate the uniqueness of a song or to create a word cloud. Check [Pudding’s article](https://pudding.cool/projects/vocabulary/index.html) that sorted rappers by their vocabulary. There’s also [SongSim](https://colinmorris.github.io/SongSim/#/), a web app that shows the visualization of repeated words ([Youtube video](https://www.youtube.com/watch?v=HzzmqUoQobc) referenced).

#### Side-Quest: Learn to use jQuery

TBA

#### Side-Quest: Create a visualizer with p5.js

TBA

### Independent Work:
* First lecture of Harvard’s CS50 class ([video](https://cs50.harvard.edu/college/2020/fall/weeks/0/))
  * This lecture goes over high-level ideas of computation and uses pseudo code to explain fundamental concepts like variables, conditionals, and loops
* Foundational Javascript concepts ([videos](https://dev.to/nas5w/foundational-javascript-concepts-through-short-tutorial-videos-40l))
  * Gives an introduction to concepts like memorization, first-class functions, etc.

## Objective B: Have a grasp on a healthy coding mentality

Software engineers are well aware of the frustration and overwhelming feeling that comes with learning how to build software. This objective is meant to help guide mentees around the emotional learning that comes with learning to code. This section is not meant to be technical. We hope that this can be a time for mentors to be vulnerable and share ways to not feel impostered by endless amounts of knowledge. Here are the following topics that should be covered:

* Imposter Mindset
* Learning what you don't understand
* Overwhelming coding
* whiteboarding and pseudo code
* What are bugs?
* What is debugging and troubleshooting?
* FOMO in knowledge
* How to ask for help

#### Side Quest: Review documentation

Have your mentee try a couple different tutorials. Have them explain which made sense and which didn’t.

#### Side Quest: Understanding www.

#### Side Quest: Asking Questions

## Objective C: Able to communicate their understanding of how modern web applications work in the industry

This objective is meant to help strengthen the way mentees understand and talk about technical topics. Without writing code, mentees should be able to communicate concepts like HTTP, asynchronous requests, databases, and APIs. This objective is also meant to learn more about the architecture design of software (with a focus on large-scale web applications).

Because this objective is meant to be flexible, here are some topics that can be covered:
* Abstraction
* Compilers, binary, and machine code
* HTTP and status codes
* Asynchronous computing (a great segway to Promises in Javascript)
* Intro to databases
* APIs and why there are so many of them
* Open-Source software
* Computer networks (TCP, UDP, etc.)
* Web security and why 2-factor authentication exists

#### Side-Quest: How to build X

Preparation: If you’re not familiar with distributed systems or doing architecture design, here are some resources that could help you feel prepared for this side quest.

Instructions: Use Excalidraw or Google Draw as a whiteboard to map out the architecture of a site that’s familiar to your mentee. For example, a subreddit, Instagram feed, bank app, or Youtube.
1. Start by drawing out a user. Ask the mentee:
	* What sort of things can a user do? For example, in Instagram, a user should be able to view photos, like and comment on photos, and upload photos.
	* What does the site need? Does it need an interface? Is it a phone app?
2. Start drawing out representations of a server to represent the application. Now ask:
	* What does the application include? For example, in Instagram, the application has to keep track of uploaded photos. It also needs to know the relationship between users and their followers. Don’t forget, we also need to keep track of account logins.
3. As you ask your mentee these questions, discuss how engineers building this existing application might solve these problems. This could mean outlining the schema for a database that keeps track of user information. You could also draw out different services like storage for photos (Instagram example) and how these services intend to interact with each other.
4. Additionally, discuss how a design might change if they decide to introduce a new feature. For example, in Instagram, they needed to incorporate videos and a messaging system. How do engineers build a feature around the current design?
5. Lastly, conclude that there are infinite ways this could be designed, but these are commonly the problems that engineers solve with code.
6.
**Extra Credit**: Discuss this article that goes in-depth about Netflix’s scalability.

#### Side-Quest: How do passwords work?

#### Side-Quest: How are applications like Zoom or Google Hangout built?

#### Side-Quest: How big can a database be?

#### Side-Quest: Web Deployment

