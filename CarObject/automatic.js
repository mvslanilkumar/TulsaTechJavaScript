function makeCar() {
    var makes  = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models  = ["Cadillac", "500", "Bel-Air", "Txi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors  = ["red", "blue", "tan", "yellow", "white"];
    var convertible  = [true, false];

    var rand1 = Math.floor (Math.random () * makes.length);
    var rand2 = Math.floor (Math.random () * models.length);
    var rand3 = Math.floor (Math.random () * years.length);
    var rand4 = Math.floor (Math.random () * colors.length);
    var rand5 = Math.floor (Math.random () * 5) + 1;
    var rand6 = Math.floor (Math.random () * 2);
    console.log (rand1) ;
    console.log (rand2) ;
    console.log (rand3) ;
    console.log (rand4) ;
    console.log (rand5) ;
    console.log (rand6) ;
    console.log ("The output of random function is: "+Math.floor (Math.random () * 5));

    var car = {
        make : makes [rand1],
        model : models [rand2],
        year : years [rand3],
        color : colors[rand4],
        passengers : rand5,
        convertible : convertible [rand6],
        mileage : 0,
        start: function() {
            started = true;
        },
        stop: function() {
            started  = false;
        },
        drive: function() {
            if (started) {
                alert ("Zoom Zoom !");
            } else {
                alert ("You need to start the engine first .");
            }
        }    
    };


    console.log (car);    
    car.start ();
    car.drive ();
    return car;
}

function displayCar (car) {
    console.log ("your new car is a " + car.year + " "+ car.make + " "+car.model);
}

var carToSell = makeCar();
displayCar (carToSell);

car.start ();
car.drive ();