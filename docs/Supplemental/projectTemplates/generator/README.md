---
layout: default
title: Generator
parent: Project Templates
grand_parent: Supplemental Materials
nav_order: 2
has_children: false
permalink: /supplemental/projectTemplates/generator
---
# Generator

### Objective

Create either a webpage that generates an entity at random. For example:

- A webpage that generates a random <a href="https://uk-food.glitch.me/" target="_blank" class="external">UK-specialty food</a>
  - <a href="https://www.musicindustryhowto.com/rap-name-generator/" target="_blank" class="external">Rap name generator</a>
  - A webpage that generates a unique <a href="https://random-acts-of-kindness-generator.glitch.me/" target="_blank" class="external">act of kindness</a>
  - Generate a random and unique <a href="https://quilt-generator.glitch.me/" target="_blank" class="external">quilt pattern</a>

Requirements:

- Basic understanding of Javascript.
- A clear idea of what to generate.
- A place to host your project (e.g. GitHub Repo or Glitch project or Replit equivalent)

### Instructions

1. Brainstorm and solidify your idea of a generator. Some key things to consider:

- Is it a poem? Image? Sound? Keep in mind that images and sounds will involve more coding.
- How many times can your generator work until it becomes repetitive. For example, a random number generator has infinite number of possibilities vs a random food generator is limited to your dataset.

2. Create your Node project (if using Javascript) and get a boilerplate web server running. We want to make sure your webpage can at least say `Hello World`.
3. Depending what you are generating, you may either need to create your own dataset or use an API to fetch for data. We suggest starting with a simple dataset like:

```javascript
const dataset = ["banana", "apple", "cherry", "peach"]; // for generating a random fruit
```

4. Come up with a strategy on how to randomize your generator. This is left open-ended for you research how to do this part. :)
5. Output your generated result to your web page. Try changing the font! Maybe add a button for users to click to generate a new thing?
6. Now make your generator more complex! Here are some ideas:

- Need to rhyme words together? Look up an API that helps you generate rhyming words!
- Let a user input words/image and generate something from that input. Check out this tutorial on <a href="https://www.geeksforgeeks.org/how-to-create-sentiment-analysis-application-using-node-js/" target="_blank" class="external">how to analyze sentiment in a Node.js application</a>
