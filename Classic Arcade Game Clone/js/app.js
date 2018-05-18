// Enemies our player must avoid
let Enemy = function (x, y, speed) {
    // Determine coordinate axis variables
    this.x = x;
    this.y = y;
        // Variable to determine the speed of the enemy
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position
Enemy.prototype.update = function (dt) {
    // Multiply the speed of our player movements by the dt parameter (which will ensure the game runs at the same speed for all computers).
    this.x += this.speed * dt;
    // When the enemies disappear off the screen, they appear again on the left in a random order and at different speeds
    // I made this value 2 pixels larger than the canvas size, just to have a spare
    if (this.x > 507) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 321);
    };

    // Check for clashes between the player and the enemies
    if (player.x < this.x + 77 &&
        player.x + 77 > this.x &&
        player.y < this.y + 65 &&
        65 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    };
};

// Draw the enemy on the screen
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Place the player object in a variable called player
let Player = function (x, y) {
        this.x = x;
        this.y = y;
        this.player = 'images/char-boy.png';
    };

// This function displays images in the game
Player.prototype.update = function (dt) {
};

// Renders the image of the user into the game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

// Coordinates of the player when the game is initially loaded or updated
let player = new Player(202, 380);

// Place all enemy objects in an array called allEnemies
let allEnemies = [];

// "y" coordinate of the enemies: 62 + 83(row height) + 83(83(row height), so that the line of movement of the beetles look pretty smooth
let enemyLocation = [62, 145, 228];

// The movement speed function for each enemy when moving across the screen, until it goes beyond the border
enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 270);
    allEnemies.push(enemy);
});

// Adds the ability to use the arrow keys for the user
// Also limits the player's field of action by the parameters of the playing field (505px x 606px)

Player.prototype.handleInput = function (useArrows) {
    if (useArrows == 'left' && this.x > 0) {
        this.x -= 101;
    };
    if (useArrows == 'right' && this.x < 400) {
        this.x += 101;
    };
    if (useArrows == 'up' && this.y > 0) {
        this.y -= 83;
    };
    if (useArrows == 'down' && this.y < 400) {
        this.y += 83;
    };

// When the player reaches a cube with water, he wins (that is, successfully avoids all enemies), and the game repeats after a short delay (250)    
    if (this.y < 0) {
        setTimeout(() => {
            this.x = 202;
            this.y = 380;
        }, 250);
    };
};

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