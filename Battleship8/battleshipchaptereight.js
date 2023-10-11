/*PAGE 338*/

var ship1 = { locations: [ "10", "20", "30"], hits: ["", "", ""]};
var ship2 = { locations: [ "32", "33", "34"], hits: ["", "", ""]};
var ship3 = { locations: [ "63", "64", "65"], hits: ["", "", "hit"]};

/*PAGE 341 */

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0, 

    // Page 369
    ships: [{locations: [0, 0, 0], hits: ["", "", ""]},
            {locations: [0, 0, 0], hits: ["", "", ""]},
            {locations: [0, 0, 0], hits: ["", "", ""]}], 


    /*ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
            {locations: ["24", "34", "44"], hits: ["", "", ""]},
            {locations: ["10", "11", "12"], hits: ["", "", ""]}], */

/*PAGE 342*/
fire: function(guess){

    for (var i = 0; i < this.numShips; i++){
        var ship = this.ships[i];
        /*Page 343*/ 
        var index = ship.locations.indexOf(guess);
        if (index >=0){
            /*Page 344*/
            ship.hits[index] = "hit";
             /*Page 347*/
            view.displayHit(guess);
            view.displayMessage("HIT!"); 
            /* Page 346 */ 
            if (this.isSunk(ship)){
                /*Page 347*/
                view.displayMessage("You sank my battleship!");
                this.shipsSunk++;
            }
            return true;
        }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
    return false;
},


/*Page 346*/ 
isSunk: function(ship){
    for (var i = 0; i < this.shipLength; i++){
        if (ship.hits[i] !== "hit"){
            return false;
        }
    return true;

    }

},
/* Skip Chaining on Page 345 - Program works the without it*/


generateShipLocations: function() {
    var locations;
    for (var i =0; i <  this.numShips; i++) {
        do { locations = this.generateShip();}
        while (this.collision(locations));
        this.ships[i].locations = locations;
    }
},

// Page 365
generateShip: function()  {
    var direction = Math.floor(Math.random()*2);
    var row;
    var col;
    if (direction === 1) {
        // Generates  a starting location for a horizontal ship.
        // Page 367
        row = Math.floor(Math.random() *this.boardSize);
        col = Math.floor(Math.random()* (this.boardSize - (this.shipLength + 1)));

    } else {
        // Add location to arry for new vertical ship.
        row = Math.floor(Math.random() *this.boardSize);
        col = Math.floor(Math.random()* (this.boardSize - (this.shipLength + 1)));

    }

    var newShipLocations = [];
    for (var i=0; i< this.shipLength; i++) {
        if (direction == 1) {
            newShipLocations.push (row + "" + (col+i));
        } else {
            newShipLocations.push ((row + i) + "" + (col)); 
        }
     }
     return newShipLocations;
    },
    // Page 368
collision: function(locations) {
        for ( var i=0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j =0; j< locations.length; j++){
                if (ship.locations.indexOf(locations[j]) >= 0){
                    return true;
                }
            }
        }

        return false;

     }
        
    };      

var view = {
    displayMessage: function(msg){
        var MessageArea = document.getElementById("MessageArea");
        MessageArea.innerHTML = msg;

    },
    displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

/*Test Code Below - Not a Part of the Program */
/*view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("tap tap, is this thing on?");*/

/*Page 349 Adding the Controller*/
var controller = {
    guesses: 0, 
    processGuess: function(guess){
        /*Page 355*/
        var location = parseGuess(guess);
        if (location) {
            /*Page 356*/
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipSunk === model.numShips){
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses"); 

            }
        }

    }

}

/*Page 352*/
function parseGuess(guess){
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"]; 
    if (guess === null || guess.length !== 2){
        alert("Oops, please enter a letter and a number on the board.");
    }else { 
        var firstChar = guess.charAt(0); 
        var row = alphabet.indexOf(firstChar);
        /*Page 353*/
        var column = guess.charAt(1); 

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board");
        }else if (row<0 || row >= model.boardSize || column < 0 || column >=model.boardSize){
            alert("Oops, that's off the board!");
        }else{
             /*Page 354*/
            return row + column;

        }
    }
    /*Page 354*/
    return null;
}

// Page 359



function handleKeyPress (e) {
    var fireButton = document.getElementById ("fireButton");
    if (e.keyCode  === 13) {
        fireButton.click();
        return false;
    }
}

function handleFireButton() {
var guessInput = document.getElementById("guessInput");
var guess = guessInput.value;
controller.processGuess(guess);
guessInput.value = "";
}

window.onload = init;

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeydown = handleKeyPress;
    model.generateShipLocations();
}

// Page 361 is optional

//Page 364
