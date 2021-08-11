# Chat Bot

### Objective
Have a working text-message bot that replies in a conversation
Requirements:
* Basic understanding of requests/response
* Comprehension of Javascript basics like using variables and if-statements.
* Twilio account (free to create one).
* Phone number to test. You can set up a free phone number through [Google Voice](https://voice.google.com/u/0/about).

Example here: https://glitch.com/~not911-bot. This is a chat bot that allows you to get information found from [not911.nyc](https://not911.nyc)


### Instructions
1. Come up with an idea for a chat bot. Chat bots are essentially programs that communicate through messages. In this case, you will be building a chat bot that can be accessed through a phone number. Here are some ideas of useful bots:
   * [Pride Event Bot](https://glitch.com/~pridebot-glitch) - tells you the nearest and latest pride event.
   * [Resist Bot](https://resist.bot/) - automatically sends letters to your local statehouse and more.
   * [Hangman game](https://github.com/mee-kell/guess-the-word) Play hangman through text messages.
   * Chat bots don't need to be serious. They can be fun like a chat bot that plays a guessing game, tic-tac-toe, or tells you whether today you should wear pants or shorts. Some other ideas are bots that tell you when the next MTA train is arriving at a station or a bot that generates a poem for you.
2. Design and build an chat bot using the Twilio API. You can follow the Twilio guide with Node.js to learn how to set up a Twilio account with your node server. It is recommended
   * Design: It’s recommended that you either map out the conversation or create a diagram of possible text messages. Example:
![design-example](design-example.png)
2. Start building your bot either on your local computer or on a virtual environment like Glitch or Repl. Some caveats when trying your bot out with Twilio's API:
      * If developing locally, you will need to use a port-fowarding tool (Twilio uses web hooks). Glitch makes this easy because its web server is always running.
