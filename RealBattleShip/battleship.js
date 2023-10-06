var view = {
    // this method takes a string message and displays it
    // in the message display area
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {

        var cell = document.getElementById(location);
        cell.setAttribute ("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute ("class", "miss");
    }
};

view.displayMessage("Tap tap, is this thing on ?");
view.displayMiss("66");
view.displayMiss("34");
view.displayMiss("55");
view.displayMiss("12");
view.displayMiss("25");
view.displayMiss("26");

var ship1 = {locations: ["10", "20", "30"], hits : ["","",""]};
var ship2 = {locations: ["32","33","34"], hits: ["","",""]};
var ship1 = {locations: ["63","64","65"], hits: ["","","hit"]};