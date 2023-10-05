var scores  = [60,50,46,78,98,53,58,78,96,88,74];

function printAndGetHighScore(scores) {
    var highScore  = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output  =  "Bubble solution #" + i + "score : " +  scores[i];
        console.log (output);
        if (scores[i] > highScore) {
            highScore = scores [i];
        }
    }
    return highScore;
}

var highScore = printAndGetHighScore (scores);
console.log ("Bubble tests : " + scores.length);
console.log ("Highest Bubble Score : " + highScore);

var bestSolutions  = [];

for (var i = 0; i< scores.length; i++) {
    if (scores [i] == highScore) {
        bestSolutions.push(i);
        console.log ("Highest score in for loop:" + highScore);        
    }
}

console.log ("Solutions with the highest score :" + bestSolutions);
    