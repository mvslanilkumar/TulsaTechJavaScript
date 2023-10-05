document.write("Testing");

var clunkCounter = 0;

function clunk (times) {

    document.write("The value of times is"+times);
    var num  = times;
    while (num > 0) {
        document.write("clunk");
        num  = num -1;
    }
}

function thingamajig (size) {
    var facky  = 1;
    clunkCounter  =  0;

    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky *size;
            document.write("The value of facky is"+facky);
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log (output);
    clunkCounter  = clunkCounter+1;
}


thingamajig (5);
console.log(clunkCounter); 

