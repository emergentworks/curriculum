# Source for EmergentWorks Curriculum website

The Jekyll theme requires that there be an `index` file at the root of the project.
You'll find to curriculum home page [here](index.md)

If you've forked this repo to contribute to it there are a couple of ways you can make changes and see the results:

## On GitHub

You can make your changes directly in your repo and let Github build and deploy the results under your account.
This will create a lot of commits as you edit directly, and you'll need to wait for GitHub to build and deploy the pages.

To set this up, go to the "Settings~ tab for your repo, and select "Pages" in the left navigation. On that page set the source to `Deploy from a branch`
and then select the branch you're doing your work under (and point it at the `/ (root)` directory.

You should then get a message at the top of the page telling you that "You site is live at ..." and there should be a `Visit Site` button
to take you to the site.

If you want to see builds (to know when your changes have been deployed), go to the `Actions` tab in your repo.

NOTE: If you want to use this method and review the results on Github, you'll probably want to
modify a couple of values in the `_config.yml` file to point to your repo:

```
url: "https://emergentworks.github.io" # the base hostname & protocol for your site, e.g. http://example.com
```

```
gh_edit_repository: "https://github.com/emergentworks/curriculum" # the github URL for your repo
```

You'll want to change "emergentworks" to your GitHub ID. (PLEASE be careful not to include these changes in the PR back to emergentworks)

## Local

You can run jekyll on your local machine and preview the results there.
This is faster to work with, but does require a bit of setup on your machine. You will need to:

- Install Ruby
- Install Bundler
- from the root directory of this repo, run the command (This should only need to be done once.)

$ `bundle install`

Then to test locally, run the command:

$ `bundle exec jekyll serve`

This will begin hosting the site and will print out the local address to view it
(probably [http://127.0.0.1:4000/curriculum/](http://127.0.0.1:4000/curriculum/)).

It will also watch for changes and automatically rebuild as you change files locally.
