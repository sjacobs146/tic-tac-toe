
# tic-tac-toe

Shall we play a game?

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
I regularly make use of console.log to ensure that events are being fired and
functions are being called when they are expected to.  I also use console.log
to see what the data looks like along the way.  I always have the developer
console up when I am testing code. If something isn't working as expected, I
will take different approaches depending upon the behaviour I'm observing. I
may look for typos, review documentation, ask a colleague, Google, etc.

# Unsolved Problems

# Links to Wireframes and User Stories
## Wireframes
<img alt="Wireframe 1"  src="https://imgur.com/G0yGqeR">
<img alt="Wireframe 2"  src="https://imgur.com/VrWsKJk">

## User Stories
https://trello.com/b/GtErbYEs/tic-tac-toe-user-stories
