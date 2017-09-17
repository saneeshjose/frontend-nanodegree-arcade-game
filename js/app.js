// Enemies our player must avoid
var Enemy = function( speed, top, left ) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.speed = speed; //Pixel per seconds
    this.x = left;
    this.y = top;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if ( this.x > ctx.canvas.width )
        this.x = -101;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function( pos ) {

    this.x = 0;
    this.y = pos;
    this.sprite = 'images/char-boy.png';
    this.stepdistance = 14;
};

Player.prototype.update = function () {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function ( key ) {

    if ( key === 'left' )
        this.x -= this.stepdistance;
    else if ( key === 'up' )
        this.y -= this.stepdistance;
    else if ( key === 'right' )
        this.x += this.stepdistance;
    else if ( key === 'down' )
        this.y += this.stepdistance;

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies.push( new Enemy(60, 1*83-24, -101) );
allEnemies.push( new Enemy(30, 2*83-24, -101) );
allEnemies.push( new Enemy(80, 3*83-24, -101) );

var player = new Player(606-171);


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
