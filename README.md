# Frogger
Frogger is classic arcade game where you have to move a character from the bottom of the canvas to top end without colliding with the 'enemies'.
The purpose of this project is to create a clone of the game in order to practice and become familiar with object-oriented programming within JavaScript.  This is a project that is part of the Front-End Web Developer Nanodegree by Udacity.

# How The Game Works
The game consists of:
- Enemies
- A Player

The user controls the movement of the player by using the arrow keys on the keyboard. The player can move in any direction in relation to the arrow pressed but cannot go beyond the canvas boarder as 'boundaries' have been created.

The enemies are controlled by the computer, with their speeds and positioning updating automatically.

The player has to make it from the bottom of the canvas to the top of the canvas without colliding with an enemy. The logic checks if the points of the player are equal to the points of the character to determine a collision. If they meet, the player is reset back to the starting point of the game.

If the player makes it to the end of the canvas without colliding with an enemy then the user wins the game. The game checks if the characters positioning is equal to the position of the last row by using the y-axis as a point of reference. If they are equal, the game cancels the animation rendering and an alert pops up signalling the game is over.

# Setup
In order to play the game, you can download the project to a your machine. Simply open the index file in a web browser of your choice and start playing as you wish.

# Project Dependencies
- Vanilla.js

# Acknowledgements
The code used to render the canvas and character images were provided as part of the project by Udacity.
