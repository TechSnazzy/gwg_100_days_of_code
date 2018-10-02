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
  let myImage = document.createElement('img');
  myImage.setAttribute('src', 'img/it.jpg');
  myImage.setAttribute('alt', 'IT Support');
  // 5. select the "myImages" div and append the myImage element to it
  document.getElementById('myImages').appendChild(myImage);
}
```

### Day 35 - 7/31 (Tuesday)

Last day of July but first day learning AJAX with XHR. I didn't write too much code today but I did go through the lessons and learned quite a bit. Refresher with `GET` and `POST` and getting ready to setup the starter code for the AJAX course. I'll save that for tomorrow though.

### Day 36 - 8/1 (Wednesday)

Wow, that was a tough lesson. I think I get the gist of it but if I had to explain what just happened I don't think I could. I'm speaking about the AJAX with XHR. AJAX with jQuery is next. Hopefully that will be a bit easier to understand.

### Day 37 - 8/2 (Thursday)

Ok so the whole day has been pretty rough but I'm determined to end it on a good note. Blah blah blah, I've been working on AJAX with XHR. Then I was about to go into AJAX with jQuery. But just so that I could make sure I got this, I broke this down to bare basics and realized that I can't just practice this on a page without having the page load from a web server. Otherwise, Chrome throws "Cross origin requests are only support for blah blah blah". So you either work on Firefox or in my case, I'm creating a small Gulp static web server template thing that I can easily just whip up anytime I need a quick web server. So that's what I worked on and now it works great and tomorrow I will get back to AJAX with jQuery.

### Day 38 - 8/3 (Friday)

Maybe not a big deal for most but for me this is awesome. First, I have `Node.js`, `NPM` and `Gulp` installed. I also have my `gulpfile.js` and `server.js` files written with all the needed tasks. Then I have a plain HTML file with a few things like a `div` and a `button` and stuff in it and a JavaScript file with some jQuery code in it. So I run the Gulp static server, launch the page as `localhost:1337` (it's the best port to run it on) and boom, there it is. Page served. Then click the button, it runs the jQuery which replaces the text on the page with the text it `load()`'s from `textfile.txt` and that's it. Pretty awesome! It's the most basic version of AJAX with jQuery (that I know how to do) but it works.

### Day 39 - 8/4 (Saturday)

Spending all morning working on learning frameworks. This course keeps getting more and more insane every day. It's mind boggling how much fun stuff there is to learn.

### Day 40 - 8/5 (Sunday)

Today was a little busy so didn't get to do as much code as I would've liked. But for today, I continued playing around with Backbone events. Working on the UdaciMeals project.

### Day 41 - 8/6 (Monday)

Tonight I spent my time working through the rest of Lesson 9 (Backbone events, Routing and hashchange & pushState). Finally finished that marathon. Now onward to Angular finally!

### Day 42 - 8/7 (Tuesday)

Today I am working on Angular. So far I am scaffolding with Yeoman and setting up my first Angular app. Fun!

### Day 43 - 8/8 (Wednesday)

Well today I didn't get too much done actually. Every day there are many forces working against me to get this course done. But I did manage to at least squeeze in my 30 minutes of code by going back over the Angular lessons regarding scope and Controllers.

### Day 44 - 8/9 (Thursday)

Trying to work through Angular Directives now. This is a bit tougher than the Controllers and Templates. Didn't quite get this done tonight but I'm sure I can get it finished tomorrow.

### Day 45 - 8/10 (Friday)

I have to admit, having a lot of fun working on this but at the same time, haven't been able to solve this Angular Directives quiz yet (the Angular Directives struggle is real!) However, I think I'm half way there and I'm determined. Plus there is also the Study Jam tomorrow - so maybe I can find answers there. Anyway...

### Day 46 - 8/11 (Saturday)

Wow, spent most of today finishing up the Angular lesson. That was a doozy. By no means could I just sit down and start writing an application in Angular at this point -- but I do definitely undertand it better now. This is something I plan to work on more when the course is done. Now on to Ember...

### Day 47 - 8/12 (Sunday)

Started messing around with Ember. I now have Ember installed and I created the udaciMeals app using Ember. This sure makes things a lot easier than trying to create it all manually.

### Day 48 - 8/13 (Monday)

Today has been a big Ember day. I am very much enjoying learning this but I have to say, getting these quizzes to pass was kinda difficult. First you have to clone the project, then `npm install` then `bower install` then `ember g route blah blah blah` whichever routes you want to create and then go in and modify the required files. Then you cross your fingers and hope it works -- which it usually doesn't. So you do it again and again until it passes. Ok great!

### Day 49 - 8/14 (Tuesday)

Pressing on with Ember today. Went over Handlebars.js templating language. I think my brain is going to asplode from syntax overload. Anyway, I guess they came up with the name because the curly braces look like sideways handlebar mustaches? See --> { Alrighty then! Hopefully get this Ember wrapped up before the week is over.

### Day 50 - 8/15 (Wednesday)

Today is a bit of a milestone. It's the middle of the week, I finished Ember and Offline and now I'm about to start Service Worker. And I've been coding for at least 30 minutes, every day for 50 days. Halfway there to 100 straight days of writing code. And now, I will go get started on Service Worker.

### Day 51 - 8/16 (Thursday)

Just trying to wrap my head around this whole Service Worker thing. It seems the goal here is to provide "offline-first" access to web applications.

### Day 52 - 8/17 (Friday)

I think I'm finally starting to get my head wrapped around these service workers. So a page loads, then you add the code to register the SW, then refresh the page, but nothing happens, so you to go Yahoo.com, then go back and something happens because by then the SW has taken control of things which means it's intercepting requests and stuff.

### Day 53 - 8/18 (Saturday)

Continuing on with the Service Worker lesson. Today I'm learning how to hijack requests. For example, I can return a fetch of a jpg for a 404 error page. So if from Dev Tools in Canary, with "update on reload" enabled in the application tab, I can refresh the page and get a picture of Dr. Evil as I'm testing this code for a page not found error. Ok, now onward to learning caching and serving assets.

### Day 54 - 8/19 (Sunday)

Today I took a break from the lessons to work on my own personal website a bit. My site is hosted on GitHub Pages, domain registered through Google Domains and SSL provided from CloudFlare. So I'm working on creating documentation for how to setup the site this way. Also, hoping to move over to Let's Encrypt instead of CloudFlare soon.

### Day 55 - 8/20 (Manic Monday)

Continuing on with Service Worker and the Wittr app. Making sure the SW can reload all the CSS by killing off the old SW. Tomorrow, will attempt to add UX to the update process.

### Day 56 - 8/21 (Tenacious Tuesday)

Rough day,... Left work late, traffic was bad, no electricity in half my apartment complex, elevators don't work either, AT&T TV and Internet service is out and the odds are all stacked against me getting any code done today. But yet, I got my code done today. Hot spot my iPhone to my computer and back in business. So in my attempt to complete the Service Worker lesson, today I added UX to the update process of the Wittr app. I did not complete the lesson yet but I did learn even more about Service Workers today.

### Day 57 - 8/22 (Wednesday)

Finally got the Service Worker lesson done and now I'm starting on the Project 5: Restaurant Reviews. This seems like it will be fun. I will need to brush up on FlexBox and ARIA and much more. So far I have everything setup and my Google Maps API key in place and good to go. Let the fun begin!

### Day 58 - 8/23 (Thursday)

Spent a good amount of time playing around with Flexbox and ARIA. Mostly Flexbox though. Trying to brush up so I can make the Restaurant Reviews app responsive and accessible. Been spending so much time with JS and other things, I need to brush up the HTML/CSS stuff.

### Day 59 - 8/24 (Friday)

In preparing for project 5, I had a bit of a mixed bag of stuff today. Doing more practice with Flexbox and ARIA. Also doing more practice with Git to expand the commands I know and writing tons of documentation so I don't forget things.

### Day 60 - 8/25 (Saturday)

Have you ever had one of those days where you worked all day and didn’t get very far? You code and create and learn and try something and on and on and as you go you start to make progress but then all of a sudden nothing is working -- so you close it all down and start over and realize that you’ve been overthinking everything and it’s all actually very simple. Anyway, that has been me working on Project 5 all day. I don’t have much to show yet (as I’ve created and scrapped my project several times over today) but I think I finally am getting it and now I know what I need to do. So here’s me starting over after working all day on this and here’s what I have so far. I have a page, that is served by Python and uses MapBox. Tomorrow I will make it responsive and accessible. I am determined!

### Day 61 - 8/26 (Slayer Sunday)

Working all morning on Project 5. I think this is starting to make a lot more sense now. I have some of the responsiveness worked out with flexbox. Now just need to tediously go through each element and make sure it's all working out. I'm also working on accessibility. So basically going to Google, reading a bit, then trying to apply it to the project. Back and forth until things seem to work well enough. Maybe by later this week I can start getting this working offline with service worker. But for now, I wrap up today's code session so I can run errands and start getting ready to head over to SAP Center later for Slayer's final show before they retire as a band. This has nothing to do with code but figured it's worth mentioning anyway because, well -- Slayer! 🤟😎🤟

### Day 62 - 8/27 (Monday)

Thankfully I had taken today off so I was able to spend all day working on Project 5. This has to be the most difficult one so far only because there are so many parts to this one. I think I have it mostly responsive (although there are definitely some questionable areas) and accessibility is there a little bit but at least the Service Worker is working. So I just submitted it to see what they would say. I'm almost positive this will be sent back to me.

### Day 63 - 8/28 (Tuesday)

Received my project back with some comments. So tonight I went through each item one by one. For example, I left out the alt text for the images. So I have that in there now. Also I had to correct one of the ARIA roles. And finally my `sw.js` file was missing a few things in the fetch area. But, all corrected and now resubmitted. Fingers crossed.

### Day 64 - 8/29 (Wednesday)

Well, you win some you lose some. Submitted project 5, got it back with things to fix. Submitted it again, returned with more things to fix. Anyway, worked all night on this and now I think I'm worse off than before the first time I submitted it. Ugh. Tomorrow is a new day. Try again tomorrow.

### Day 65 - 8/30 (Thursday)

Continuing on with Project 5 tonight. Going through the CSS one little bit at a time. This is definitely a good lesson in how CSS works.

### Day 66 - 8/31 (Friday)

Continued working on Project 5. Kinda stuck trying to figure out why the descriptive alternate text works on the `index.html` page but not the `restaurant.html` page. Didn't get a whole lot of time to work on it today but the good news is that I have all day tomorrow dedicated to finishing this. I will do this. The mission for tomorrow: Wake up, get to work and get this project finished or die trying.

### Day 67 - 9/1 (Saturday)

After working all day on this (well, technically all week and 2 other prior submissions) I finally finally finally passed Project 5. Wow! Can’t even describe how happy I am right now. Geez, that was rough! But now, finally onward to React! Looking forward to it.

### Day 68 - 9/2 (Sunday)

Finally starting React. Learning about the difference between Imperative code and Declarative code.

### Day 69 - 9/3 (Labor Day)

Today marks the end of the 3 day holiday weekend. Saturday I finished Project 5 and yesterday I got my feet we with React and today I started to dive in. Learning how to use React.createElement(). This is amazing. Create a root element in the HTML and then everything hooks onto that. You can nest your elements and chain arrays to .map() and .filter() to create new arrays. Good times!

### Day 70 - 9/4 (Tuesday)

Scaffolded the heck out of my first React app. I'm Yarn Start'ing, and NPM'ing and dev server'ing much more. This is what I call, "Fun!"

### Day 71 - 9/5 (Wednesday)

My Mac mini is getting a workout. Running 2 servers (one for the backend and one for the front end) and building out the Contacts List app. So far I am learning how to pass data using props. Might have to go over this lesson again. That was a lot of info.

### Day 72 - 9/6 (Thursday)

Decided to start Project 6 today (the MyReads app). I figure I will go through the lessons and start thinking about how the things I learn will get applied to the project. Previously, I would go through all the lessons and then hit the project. So trying something different this time.

### Day 73 - 9/7 (Friday)

Studying React components today. I discovered that this is easy to play around with in CodeSandBox. So I got my account up and running and going through Tyler McGinnis [React Tutorial](https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/)

### Day 74 - 9/8 (Saturday)

Pretty much spent the entire day on Lesson 3 in React (State Management). My brain is officially melted. I learned almost everything except I need a bit more on Controlled Components. That's for tomorrow.

### Day 75 - 9/9 (Sunday)

Today's day of code is all about learning how to render UI with external data in React.

### Day 76 - 9/10 (Monday)

Chugging along with Project 6. This is a tough one but I'm learning a lot.

### Day 77 - 9/11 (Tuesday)

And more Project 6 today. So far I have removed all the hard coding and now have the books showing on the page. This is a difficult project. So many pieces that all work together. Hard to keep track of everything.

### Day 78 - 9/12 (Wednesday)

Still working on Project 6. Today I have the books showing, I can switch between Currently Reading, Want to Read and Read. So when I select one of those options, the book will move to the correct book shelf. Amazing!

### Day 79 - 9/13 (Thursday)

Pressing on with Project 6. Today I got the input field working and now I can search for books and it handles errors if there are no books to be found.

### Day 80 - 9/14 (Friday)

Today I broke away from Project 6 and decided to spend some time on ReacJS.org in the Main Concepts area. When I first started studying this page I looked it and went, "Duh!" But now things are actually making sense. I'm kinda starting to "get it". Feels good to start to "get" React.

### Day 81 - 9/15 (Saturday)

Didn't get much done today with Project 6 but I did spend some time on ReactJS.org again. Working through State and Lifecycle. I think it's very important to learn this in order to get good with React.

### Day 82 - 9/16 (Sunday)

Another weekend, gone in the blink of an eye. I worked on Project 6 once again today. I believe it is about 95% complete and actually I could probably submit it now. But I'm going to spend more time on it tomorrow to make sure everything is all set.

### Day 83 - 9/17 (Monday)

Working on the README file for Project 6. So I'm writing instructions for usage, installation, etc. And including resources and other information.

### Day 84 - 9/18 (Tuesday)

Some days are up and others are down. Today is definitely an Up day. I had submitted P6 yesterday.

- Bad News: It didn't pass.
- Good news: I got some excellent, amazing feedback that I implemented and learned from and now it works great. For example, I chained the items in `moveShelf` using a `.then()` so that the books actually moved to the correct shelf, reliably, every time. I also implemented `debounce` on the `SearchPage` input. Both worked like magic. So I'll submit again. If there's more comments, then great. Just more stuff to learn. Pretty awesome.

### Day 85 - 9/19 (Wednesday)

Another good news/bad news day. The good news is that I passed Project 6. Now all I have to do is finish the lessons and then hopefully complete Project 7. The bad news is that tonight I tried to make the MyReads app work on GitHub pages but I failed so far. Maybe I'll try again over the weekend. I can't get it to work.

### Day 86 - 9/20 (Thursday)

And here we go, starting Project 7 today. I didn't actually do that much writing of code today though. I'm spending most of my time reading the requirements and starting to think about what I want to do and getting a good understanding of the project and the resources I have to work with. This will be fun, yet scary since I've never done a project without starter code. Fun!

### Day 87 - 9/21 (Friday)

Today I am trying to start learning about Google Maps API. I was thinking of maybe using MapBox or something else but I think I will be using Google Maps for Project 7.

### Day 88 - 9/22 (Saturday)

Today I'm continuing learning the Google Maps API. I didn't spent too much time on it though but I will get more done tomorrow instead.

### Day 89 - 9/23 (Sunday)

Starting to get the hang of this Google Maps API. I got my LatLongs and I'm GeoCoding and Snazzy Mapping and got my markers and Google Street View. This is way more complex than I ever thought. Now just need to figure out how to make this work in React.

### Day 90 - 9/24 (Monday)

Ok so I have some progress to report. Project 7 is underway and I do have a map showing on the page now. This is happening and there is hope.

### Day 91 - 9/25 (Tuesday)

Continued working on Project 7. So far I have a map render to the viewport. It's displaying the markers and fetching the location data using the Foursquare API and Axios. Also I have InfoWindow displaying information about each location.

### Day 92 - 9/26 (Wednesday)

Well, getting down to the end here. Just a little bit more of this #100DaysOfCode left and almost done with the course. Tonight I finished the rest of the API lessons. All that's left is Project 7 -- which I've been working on. I have the Map with markers done. But the map takes up the whole view. So next, I need to make the map fit about half the view and then create an area on the side that will list the location information and have a search input. Not entirely sure how to do that but I will be thinking about it.

### Day 93 - 9/27 (Thursday)

Tonight not much actual coding. I seem to know how to make the map and markers but having trouble with everything else. So mainly researching tonight and tomorrow and spend all weekend coding and see if I can make something happen.

### Day 94 - 9/28 (Friday)

Today I revisited the [Tyler McGinnis React Tutorial](https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/). And also studying and trying to figure out all this [super() and super(props) in constructor of a React Class Components](https://medium.com/@etherealm/super-vs-super-props-in-react-class-components-58658af6ecf2) stuff. So mostly studying/brushing up a bit today getting ready for 9 million hours of code this weekend.

### Day 95 - 9/29 (Saturday)

Wow. Marathon Saturday. Been working on learning React all day. It's starting to click more and more. Tomorrow I will start my Project 7 from scratch again. I think I'm starting to feel more comfortable with the React concepts. Like how components work together, props and state, using this for every little thing, clicking, error handling, incrementing. Anyway, part 2 of all weekend coding resumes tomorrow morning bright and early.

### Day 96 - 9/30 (Sunday)

100 Days of Code? More like 100 million hours of code in just this weekend. LOL. Well, my brain is officially fried working on Project 7. Looking forward to being done with this.

### Day 97 - 10/1 (Monday)

I decided to start my project 7 from scratch yet again. Doing it all differently now. I think I'm starting to understand this more and more now. Been working through learning fundamentals all day today. It's making more and more sense as I do this. This time I'm creating the Map component using `react-google-maps`.
