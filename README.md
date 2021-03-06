
# tic-tac-toe

Shall we play a game?

[Click Here for demo](https://sjacobs146.github.io/tic-tac-toe/index.html)

# Technologies Used
- HTML5
- CSS
- JavaScript
- jQuery
- Bootstrap
- AJAX
- REST

# My Planning process
I began my planning by reading the project requirements, and creating wireframes.
Then I created some user stories, and an [agile board](https://trello.com/b/Pia8Ti4W/game-project) to represent the tasks that
needed to be accomplished.  I also spent some time designing my application. I
defined the entities needed, and came up with a general approach to how I'd
structure the game board, store the information about the game, and determine
whether there was a winner or not.

# My development process and problem-solving strategy
## My development process
After my planning was finished, I created a first stab at the UI with everything
on the page at once.  Then I began developing the game logic without involving
any apis.  I didn't think too much about writing the most elegant code at this
point.  Once I could successfully play a game "offline", I implemented the
sign-up, sign-in, and change password functionality.  Once I was able to have
a token to call the game api calls, I began implementing the logic to store
game state, and the functionality to start/re-start games. Before starting this
step, I took time time to refactor my code a bit to be more elegant.  After I
could store game state via the RESTful APIs, I implemented the functionality to
let the user get the total number of games won.  Next, I spent some time
making the UI more like a single-page app by adding navigation and showing
and hiding the various parts of the UI. Finally, I did some code refactoring
to make it more efficient.

In general, I created a feature branch each time I began a new major feature. I
committed my code each time I had a small piece working the way I wanted it to.
I typically do not commit code that is not working and tested.  Once a feature
was completed, I merged the feature branch to master, and deployed it to GitHub.

## My problem-solving strategy
I regularly make use of console.log and the debugger to ensure that events are being fired and
functions are being called when they are expected to.  I also use console.log
to see what the data looks like along the way.  I always have the developer
console up when I am testing code. If something isn't working as expected, I
will take different approaches depending upon the behaviour I'm observing. I
may look for typos, review documentation, ask a colleague, Google, etc.  I also
use the developer console to preview small changes to styles before I implement
in my code.

# Unsolved Problems
- I would like to be able to start a game without clicking on the Start Game
button.  I had some issues with promises...

- The "active" state is not set correctly on the navigation bar when the game
board is displayed after sign in.

# Code I'm most proud of
When I first implemented the click event for the boxes on the game board, I added
a handler for each box.  I knew that was not the best way to implement it, so I
tried adding the handler to the game board itself and trying to determine exactly which
box was clicked in the event callback function.  That didn't work.

```javascript
const addHandlers = function () {
  $('#cell0').on('click', onClickBox)
  $('#cell1').on('click', onClickBox)
  $('#cell2').on('click', onClickBox)
  $('#cell3').on('click', onClickBox)
  $('#cell4').on('click', onClickBox)
  $('#cell5').on('click', onClickBox)
  $('#cell6').on('click', onClickBox)
  $('#cell7').on('click', onClickBox)
  $('#cell8').on('click', onClickBox)
}
```
When I was implementing the Bootstrap navigation bar, it dawned on me that I
could attach my event listener to a class.  I already had a class set up for
each box on the game board, so I changed the code to listen for a click on the
box class:

```javascript
const addHandlers = function () {
  $('.box').on('click', onClickBox)
}
```

# Wireframes and User Stories
## Wireframes
![Wireframe 1](/docs/images/Wireframe_1.jpg)

![Wireframe 2](/docs/images/Wireframe_2.jpg)

My initial wireframes were fairly ambitious...

## User Stories
https://trello.com/b/GtErbYEs/tic-tac-toe-user-stories

## A Message for my colleagues
![Hang In THere](/docs/images/HangInThere.jpg)
