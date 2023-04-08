---
layout: default
title: Repository and Project Setup
nav_order: 1
has_children: false
parent: Phase 3 - Full Stack JavaScript
permalink: /phase3/repoprojectsetup
---

# Repository and Project Setup

*Note*: The expectation is that the mentor will work with the mentee to accomplish this setup. 
Since almost everything is done within the mentee's GitHub account, the mentor will largely be monitoring and
helping the mentee with these instructions.

## Set up your repository

- Go to the repository template.
  - For course 1 (Intermediate HTML and CSS) use [phase-3-01-intermediate-html-css-assignments](https://github.com/emergentworks/phase-3-01-intermediate-html-css-assignments)
  - For course 2 (JavaScript) use [phase-3-02-javascript-assignments](https://github.com/emergentworks/phase-3-02-javascript-assignments)
- Click on "Use this template" (option "Create a new repository")
   <br/><img srcset="/curriculum/assets/images/UseTemplate1.png 2x">
- When the "Create a new repository from [REPO NAME]" pop-up appears:
  - Select your gitHub account
  - Assign a repository name 
  - Keep your new repo "Public"
  - Click the "Include all branches" checkbox (this will copy the "mentee" branch that's important for issue links to work)
    <br/><img srcset="/curriculum/assets/images/UseTemplate2.png 2x">
  - Click the "Create repository from template" button

## Set up your project

- Go to the matching project.
  - For course 1 (Intermediate HTML and CSS) use [EmergentWorks Phase 3 Course 1 Tracking](https://github.com/orgs/emergentworks/projects/4)
  - For course 2 (JavaScript) use [EmergentWorks Phase 3 Course 2 Tracking](https://github.com/orgs/emergentworks/projects/2)
- Click on the ellipses on the right, and click "Make a copy"
  <br/><img srcset="/curriculum/assets/images/CopyProject1.png 2x">
- When the "Make a Copy" pop-up appears:
  - Select "Draft issues will be copied if selected" (this is important, as all tasks are set up as "draft issues")
  - Set your GitHub account as the "Owner" (you'll probably want this to be the Mentee's account)
  - Name the Project as you desire (I just removed the "[copy]" text)
      <br/><img srcset="/curriculum/assets/images/CopyProject2.png 2x">
  - Click the "Copy Project" button

## Connect your project to your repo

- Navigate to your new repo
- click on the "Projects" tab.
  <br/><img srcset="/curriculum/assets/images/ConnectProject1.png 2x">
- Click on the "Link a Project" button
- select the project you created to link the two
  <br/><img srcset="/curriculum/assets/images/ConnectProject2.png 2x">
- Be sure to make the project "public" so that your mentor can see it.
  - Select "Settings"
  <br/><img srcset="/curriculum/assets/images/ConnectProject3.png 2x">
  - Under "Visibility" select "Public"
  <br/><img srcset="/curriculum/assets/images/ConnectProject4.png 2x">

## Grant the "Write" role to your mentor.

- From the Project settings, click the "Manage Access" tab on the left
- Find your mentor in the search box for "Invite collaborators"
- Make sure the Role is "Write" 
- Click "Invite"
  <br/><img srcset="/curriculum/assets/images/ConnectProject7.png 2x">
- The mentor should receive an email to accept the invitation to collaborate

## Set up workflow to change status to "done" when issue is closed

- From the ellipsis button on your project, click "Workflows"
  <br/><img srcset="/curriculum/assets/images/ConnectProject5.png 2x">
- select the "Item closed" workflow, and click the pencil icon to edit.
- from the "Set value" dropdown, select "Done"
- click the "Save and turn on workflow" button
  <br/><img srcset="/curriculum/assets/images/ConnectProject6.png 2x">

## Set up workflow to change status when a pull request is merged

- Follow the same process to setup and turn on the "Pull request merged" workflow.

## Add your mentor as a collaborator

- In you repo, select the "Settings" tab at the top
- Select the "Collaborators" tab to the left
- Click the "Add people" button
  <br/><img srcset="/curriculum/assets/images/Collab1.png 2x">
- Use the search to find your mentor and select them as a collaborator
  <br/><img srcset="/curriculum/assets/images/Collab2.png 2x">
- At this point, your mentor should receive an invite email and will show in your repo as "pending invite"
- From the invite email the mentor can click the "View Invitation" button and accept the invite.

## (Optional) Configure a board project view for the mentee
- You can add a new View of type "board"
- If you add a "-no:status" filter and save your changes, the mentee's board will not be flooded with tasks that have not yet been converted to issues.
  <br/><img srcset="/curriculum/assets/images/ConnectProject8.png 2x">
