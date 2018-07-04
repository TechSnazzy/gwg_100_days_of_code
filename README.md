# Grow With Google 100 Days of Code Journal Entries, 2018


### Day 1 - 6/27 (Wednesday)
First I headed over to the Classic Arcade Game Clone Project Details page and read over the "How do I complete this project" page. Cloned the game repo and then pushed it up to my GitHub site.

After that I started to look at the gameplay from the video and go over the `app.js` file to get familiar with it. Then I went over the project rubric.

Next I started reading the Project Instructions and tried to start thinking about what I might need to do to accomplish each part. For example, thinking about what classes I might need to implement (which I do not know the answer yet 😃 ).

Realizing as I read this that I need to learn more about HTML5 Canvas information. Not quite familiar with that yet but I hope I will learn it as I go here.

For today I spent time getting my Arcade Game project setup on GitHub. So I cloned the project, setup my own repo, etc. Then I spent some time becoming familiar with the game requirements and instructions (there’s a lot) and getting ready to start writing code. Tomorrow I will spend trying to write some pseudocode and see if I can spark some progress.


### Day 2 - 6/28 (Thursday)
So this is really really really difficult. Here's what happens: I go through the lessons and I understand everything I'm doing as I'm doing it. I write things on paper, work it all out and it seems to make sense. But then when I get to a project like this, it's as if I haven't learned anything. Ok, so anyway this concludes my complaining.

What I learned is that I have a game board, some enemies and a player. The player moves vertically and horizontally, one square at a time. Each enemy moves horizontally at various speeds.

So today I’m living in Chrome, in Dev Tools, working on Project 3. I have spent the past 30 minutes trying to fix the errors in so I could get the game board to show up. That seems to be the general consensus of how to start as far as I’ve seen people say on Slack. Anyway, so far no success. But I will keep trying.

EDIT: I went ahead and started taking the free HTML5 Canvas Basics course to see if that would help spark something. And it did. Now I understand how to use the X and Y coordinates and I managed to load an image on the page using some JS and Canvas. Might not seem like much but I'm getting there. Slowly but surely.

### Day 3 - 6/29 (Friday)
Today I spent some time helping one of my fellow scholars figure out how to use Git in Windows. Personally I had never used it in Windows before so I had to figure it out. I installed Git for Windows and then showed her how to open Git Bash and told her to edit her .bash_profile.sh file using either VI or VIM editor. That seems to have done the trick. Now I learned something new. I normally just use Git from within the Mac terminal.

### Day 4 - 6/30 (Saturday)
So today I am continuing on with then HTML5 Canvas Basics course. Working on building this meme generator so I’ll need a web server for this. I already have a LAMP server running in a VirtualBox VM. But now I’m building a MAMP server according to the instructions in the course.

### Day 5 - 7/1 (Sunday)
Goal for today: Get the game board to show up. When I first launch the `index.html` file there is just a blank page. When I look at dev tools, there are several errors. So today I need to try and clear the errors and get the game board to show up.

As it turns out, the game board does't show up because there are no `allEnemies()` declared yet. So if I comment out the `updateEntities()` code in `engine.js` then the game board shows up.

I also have to comment out the code for `renderEntities()` for the same reason. Once `allEnemies()` is defined, then I can uncomment that code. Now the game board shows up and I have no errors. Yay! Only look me 5 days to figure this out, LOL. Hashtag, sarcasm.

### Day 6 - 7/2 (Monday)
Here we go with Day 6. I managed to get the Player to show up on the screen and I have the bugs moving randomly across the screen. I even have a collision and a popup that declares a win. So getting pretty close to being done.

That said, I'm also spending quite a lot of time getting better with HTML Canvas. So I have good news and bad news. The bad news is that I've been sorta moving around randomly watching many videos and doing a bunch of different code alongs related to Canvas things. But the good news is that I think the logic of all of this is really starting to sink in.

So all in all, for Day 6 I have the core functionality of the Arcade Game done. I am also working non-stop on learning and more about about HTML Canvas. This is all starting to get pretty fun.

### Day 7 - 7/3 (Tuesday)
Today I stepped away from the Arcade Project. I was in Chrome looking at my bookmarks and thought it might be fun to try and make a simple page that has a list of my links in different categories. The goal was to make it somewhat responsive using media queries, use Bootstrap so it looks nice and it should make use of HTML5, CSS and JavaScript. I created a basic HTML page, added some styling with CSS, linked BootStrap/FontAwesome/Google Fonts and created a small JS file that adds a button that you can click on to scroll back up to the top. I'll get back to the Arcade Game tomorrow. Needed a change of pace for today.
