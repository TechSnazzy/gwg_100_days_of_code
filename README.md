# Grow With Google: 100 Days of Code, 2018

[Check out my Instagram Site for Photos](https://www.instagram.com/TechSnazzyLLC/)

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
Today I spent some time helping one of my fellow scholars figure out how to use Git in Windows. Personally I had never used it in Windows before so I had to figure it out. I installed Git for Windows and then showed her how to open Git Bash and told her to edit her `.bash_profile.sh` file using either Vi or Vim editor. That seems to have done the trick. Now I learned something new. I normally just use Git from within the Mac terminal.

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

### Day 8 - 7/4 (Wednesday) Happy Independence Day! 🇺🇸
Happy 4th of July! 🇺🇸 I continued on with the Pong arcade game (https://www.udemy.com/code-your-first-game). This is not actually a Udacity course but I'm using this course to get better with Canvas and coding a game. This is helping me better understand the Arcade Game. I have the Arcade Game mostly done and I am really starting to understand everything now. So for now I'll finish the tennis game, then this weekend finalize and submit the Arcade Game Project 3 and then move on to the next thing.

### Day 9 - 7/5 (Thursday)
Picking back up on the Arcade Game. So far I have the basic functions working from a few days ago but I hadn't been committing anything to Github yet. So today I just restarted the project so I could properly make my Git commits and write README documentation as I go.

### Day 10 - 7/6 (Friday)
I ended up spending all day finishing up the Arcade Game. The player moves around the board, doesn't go out of bounds, bugs move across the screen, collisions = start over, player makes it to the water = game winning modal pops up, comments are written -- yeah, I'd say I have done the bare basics. Now I have submitted and let's see if I pass. 🤞

UPDATE: I passed! Hooray! Now on to the next thing...

### Day 11 - 7/7 (Saturday)
Now that I passed Project 3 (Whew!!), time to move on to 'build tools'. I've heard of Grunt and Gulp before but never actually used either one. So for today, I have installed `Node.js`, `NPM` and `Gulp`. After that, I spent some time learning how to use Gulp and setting up my `package.json` file.

### Day 12 - 7/8 (Sunday)
Spending all day working on learning Gulp (in preparation for the upcoming Project 4 which is the Feed Reader project). So far I have installed `Node.js` with `NPM`. Then I installed Gulp globally, create a project directory and initialized it with NPM. Now I'm learning how to create gulp tasks and more. Turns out the Udacity course on Gulp wasn't great so I am using this other one from Udemy that a fellow scholar told me about.

### Day 13 - 7/9 (Monday)
Continued on learning about Gulp. I now have a `gulpfile.js` setup with a web server and watch tasks. So my edits update automatically in the browser.

### Day 14 - 7/10 (Tuesday)
Today I'm chuggin along learning how to do unit testing in Lesson 22, "Writing Test Suites". I am using Jasmine and writing tests to make sure my code does what it says it will do.

### Day 15 - 7/11 (Wednesday)
Finally finished all the lessons for Section 3. So all that's left to do is write my Feed Reader code and I can move on to Section 4 (can't wait!) So for today I am spending time just trying to wrap my head around this project. I'm reading through the Project Rubric, going over the `feedreader.js` and `app.js` files and trying to get an understanding of what I need to do here.

### Day 16 - 7/12 (Thursday)
Continuing on with the Feed Reader project. Decided I didn't understand this well enough at all so going through lessons 21 and 22 one more time and practicing with Describe (Suite -- a group of related specs) and It (Spec -- a container used to perform a test).

### Day 17 - 7/13 (Friday the 13th)
Spending more time learning unit testing. Still kinda not entirely getting this but I am watching YouTube videos and trying to figure this out. Happy Friday the 13th! 💀 Also I tweeted to Mozilla to see if I could volunteer. Figured it would be the best way to learn. Hopefully they will let me! 🤞

### Day 18 - 7/14 (Saturday)
Spent the day working on Project 4 (the Feed Reader for unit testing with Jasmine). I think I am getting this unit testing stuff now. My Feed Reader now passes 6 tests successfully using Jasmine. Just one more to go and then I should be about ready to submit. Still need to write comments, README file, etc.

### Day 19 - 7/15 (Sunday)
Spent the morning finishing up the last spec in the Feed Reader project. Completed all 7 tests, I have my README updated and comments written. Everything seems good so I submitted it and now I wait.🤞 Looking forward to getting started on section 4. I guess now the real fun begins.

### Day 20 - 7/16 (Monday)
Good-bye sections 1-3 and Hello section 4. Today I am starting section 4 by getting familiar with the requirements for building the cat clicker. I hope I can write it in vanilla JS.

### Day 21 - 7/17 (Tuesday)
I created the first version of my cat clicker. It's pretty basic. You just click the cat.
Playable version: https://techsnazzy.com/cat-clicker/index.html
GitHub version: https://github.com/TechSnazzy/cat-clicker

### Day 22 - 7/18 (Wednesday)
Expanded on the cat clicker app. I now have 2 cats. First I replaced the hard coded HTML H1 element text with jQuery that adds the heading text. Then I also updated the CSS file so that it has some responsive BootStrap classes in it to keep the images lined up. Now I need to recode the whole thing so that it will take at least 5 cats and I will use Function Closures to make it work.

### Day 23 - 7/19 (Thursday)
I decided that doing the cat clicker premium app was going to take too long so I’m moving ahead in the lesson with MVO (model, view, octopus 🐙 ). Once I get this down then I can revisit CCP (since I need it for the app anyway).

### Day 24 - 7/20 (Friday)
I'm all over the place today. Currently working on "Identify the MVO in New App". So I'm studying this Udacity Retain app. Trying to find the connections between everything. I also realized I never did the Styling part in Section 3 so I went back and did that. I swear there is about 10 lifetimes of material to cover in this course. Good times! 😜

### Day 25 - 7/21 (Caturday)
Day 25. I am one quarter of the way through 100 Days of Code. Today I am back to working on Cat Clicker Premium. I have been studying and coding along with the CCP solution. Then I will start it over and write my own code based on what I am learning.

### Day 26 - 7/22 (Sunday)
Continuing on with the Cat Clicker Premium app. After spending plenty of time studying the solution, I think I have a good understanding of how this works. So now I am starting from scratch building out my own Cat Clicker Pro app. It's like putting together a puzzle except you have to first create all the puzzle pieces and then put them together.

### Day 27 - 7/23 (Monday)
Continuing on with Section 4, Lesson 2. I decided to put Cat Clicker Premium Pro on the back burner for now and move ahead with the lessons -- which is ok. I think I understand separation of concerns well enough to move ahead. I will just come back to it later. That said, now I'm learning about creating Promises.

### Day 28 - 7/24 (Tuesday)
```js
new Promise(function(resolve) {
  console.log('Day 28:');
  resolve();
  console.log('Today I am learning how to write Promises.');
}).then(function() {
  console.log('First, I will learn to Wrap them like this.');
});
```

### Day 29 - 7/25 (Wednesday)
```js
/*
 * Really diving in deeper with Promises now.
 * I promise to create the cat clicker app.
 * If I complete the cat clicker app then I earn a gold star.
 * If I don't complete it, then I will be flushed down the toilet.
 * Good luck to me! Looks like I'm Thening things now. Progress!
 */

let myCatClickerAppPromise = new Promise(function(resolve, reject) {
  let appCompleted = true;
  let name = 'Sean';

  if (appCompleted) {
    resolve(name);
  } else {
    reject(name);
  }
})
.then(function(yay) {
  alert(yay + ' earned a gold star!');
})
.catch(function(boo) {
  alert(boo + ' will be flushed down the toilet!');
});
```

### Day 30 - 7/26 (Thursday)
Things are getting pretty crazy. Working on the Exoplanet Explorer app with native JavaScript Promises. Wrapping XHR's and working on Fetch API's. Fun!

### Day 31 - 7/27 (Friday)
It's good to keep working on the basics. I took it for granted that I know what a callback function is. Turns out, I really don't. So today I really focused and dove in deeper with callback functions. I totally get it now. So first I create a function. Give it an argument, do something and then call the function. Then I add a function to the callback, add another argument to the first function and call it within the function and joila, I have a callback function. I get it now.

### Day 32 - 7/28 (Saturday)
This morning I'm taking a deeper dive into the exoplanet explorer. First time around I couldn't get the text string to show up on the page. Now I have it showing for both the XHR and the Fetch. Took me a few rounds of cloning the repo, installing gulp/bower and then writing the necessary code.

### Day 33 - 7/29 (Sunday)
Spent the whole day covering an array of topics [reviewed JavaScript Hoisting, reviewed difference between var, let and const, continued diving deeper into learning Promises with the Exoplanet Explorer lessons, and did a ton of practice with fundamentals]. Next up: AJAX.

### Day 34 - 7/30 (Monday)
Today I realized I needed to get better with click event listeners. So I cobbled together a small test project and ended up creating a single button that I use to click and add an image to the page. I made sure to add the image inside a specific div rather than just splattering it at the end of the HTML.
```js
// 1. add a click event listener to the button
myButton.addEventListener('click', function() {
  // 3. call the function
  addImageToDiv();
});

// 2. create function to add an image to the div
function addImageToDiv() {
    // 4. create a new img element and call it "myImage"
    let myImage = document.createElement("img");
    myImage.setAttribute("src", "img/it.jpg");
    myImage.setAttribute("alt", "IT Support");
    // 5. select the "myImages" div and append the myImage element to it
    document.getElementById("myImages").appendChild(myImage);
}
```

### Day 35 - 7/31 (Tuesday)
Last day of July but first day learning AJAX with XHR. I didn't write too much code today but I did go through the lessons and learned quite a bit. Refresher with `GET` and `POST` and getting ready to setup the starter code for the AJAX course. I'll save that for tomorrow though.

### Day 36 - 8/1 (Wednesday)
Wow, that was a tough lesson. I think I get the gist of it but if I had to explain what just happened I don't think I could. I'm speaking about the AJAX with XHR. AJAX with jQuery is next. Hopefully that will be a bit easier to understand.
