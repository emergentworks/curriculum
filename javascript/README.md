# Javascript & Developer Mindset

There are three objectives to this part of the curriculum:

1. [Develop the ability to read and write basic Javascript.](objectives/javascript.md)
2. [Develop a healthy coding mentality.](objectives/developerMindset.md)
3. [Develop a basic understanding of how modern web applications.](objectives/webArchitecture)

While these objectives should probably be introduced in this order, you should expect to work on all three objectives in parallel. Emphasis should be on objectives 1 and 2.

```dot
graph TB
    subgraph
        webapps[Modern Web </br/> Applications]
    end

    subgraph
        mindset[Developer Mindset] ==> ms_Intro(Introduction)
    end

    subgraph
        javascripts[Read and Write <br/> Jeavascript] ==> js_intro(JS Introduction)
    end
```
