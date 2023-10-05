var taxi = {
    make : "Webville Motors",
    model :  "Taxi",
    year : 1955,
    color : "Yellow",
    passengers : 4,
    convertible : false,
    mileage : 8000
};

function prequal (car ) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook  =  prequal (taxi);

if (worthALook ) {
    console.log ("You gotta check out this " + taxi.make + "" + taxi.model + "It has just run "+ taxi.mileage +" miles");
} else {
    console.log ("You should really pass on the " + taxi.make + "" + taxi.model);
}
