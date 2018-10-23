// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
    // Variables used to define the enemies postion, speed and image used in rendering
    this.x = x;
    this.y = y;
    this.length = 101;
    this.boundry = this.length * 6.5;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.resetPosition = - this.length;
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // Check if enemies position is within the boundaries and update its postion using speed and dt
    // which will ensure the game runs at the same speed for
    if(this.x < this.boundry){
      this.x += this.speed * dt;
    }
    // If enemies postion is out of the boundry, reset the positions to the start of the canvas
    else {
      this.x = this.resetPosition;
    }
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Character class used to create a player
class Character {
  constructor() {
      // Variables used to define the player characters postion, and image used in rendering
    this.length = 101;
    this.height= 83;
    this.padding = 20;
    this.end = 63;
    this.startX = this.length * 2;
    this.startY = (this.height * 5) - this.padding;
    this.x = this.startX;
    this.y = this.startY ;
    this.gameOver = false;
    this.sprite ='images/char-boy.png';
  }
  // Update the players position, required method for game
  update() {
    // Determine if the player has collided with the enemy by comparing their positons
    for(let enemy of allEnemies){
      if(this.y === enemy.y && (enemy.x + enemy.length / 2 > this.x && enemy.x < this.x + this.length / 2) ){
        // If there is a collision, reset the payers postion
        this.resetPlayer();
      }
    }
    // Check if player has reach the end of the canvas
    // 63 is the location of the end of the canavas along the y axis for each row
    if(player.y === this.end){
      // Change gameOver to true;
      player.gameOver = true;
      setTimeout( () => {
        if(confirm('GAME OVER, YOU WIN!')){
          console.log('Player is reset');
        }
      }, 200);

    }
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Function to handle keypress
  handleInput(input){
    // Switch statement to alter the players movement according to each key presses
    // Conditional on each case to create boundaries i.e prevent player from moving offscreen
    switch (input) {
      case 'left':
        if(this.x > 0 ) {
          this.x -= this.length;
          break;
        }
      case 'up':
        if(this.y > this.height){
          this.y -= this.height;
          break;
        }
      case 'right':
        if(this.x < this.length * 4){
          this.x += this.length ;
          break;
        }
      case 'down':
        if(this.y < this.height * 4){
          this.y += this.height;
        break;
      }
    }
  }

  //reset function used to place the character back to the starting points after each collision
  resetPlayer(){
    this.x = this.startX;
    this.y = this.startY;
  }
}

//Creating new objects from the classes
const player = new Character();
const enemy = new Enemy(0, 63, 400);
const enemy2 = new Enemy(55, 146, 311);
const enemy3 = new Enemy(155, 229, 184);
const enemy4 = new Enemy(0, 63, 100);
const enemy5 = new Enemy(155, 229, 243);

// Empty array used to add created ememies by pushing them into the array
//allEnemies is used by the engine to update each of the enemies.
const allEnemies = [];
allEnemies.push(enemy, enemy2, enemy3, enemy4, enemy5);

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
});
