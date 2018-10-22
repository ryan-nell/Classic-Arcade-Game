// Enemies our player must avoid
class Enemy  {
  constructor(){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

  // Draw the enemy on the screen, required method for game

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  render(){

  }

}


// Player class
class Character{
  constructor(){
    this.sideways = 83;
    this.forward = 101
    this.x = this.sideways * 2.5;
    this.y = this.forward * 4.5;
    this.sprite = 'images/char-boy.png';
    this.reset = 0
  }
  // Update Players position
  update(dt){

  }
  // Render the players image at current position
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  // Update players coordinates according to key press
  handleInput(input){

  }
  // Set players postion to default starting point
  resetPlayer(){
    this.reset = 0;
  }
}

// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    console.log(e.keyCode);
});
