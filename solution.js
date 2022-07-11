//1

const farbe = "banane";

switch (farbe) {
    case "red":
        console.log("Q1: Red's a great color on you.");
        break;
    case "blue":
        console.log("Q1: Blue? Great choice.");
        break;
    case "green":
        console.log("Q1: Ok. Green it is.");
        break;
    case "yellow":
        console.log("Q1: Not what I would have picked, but yellow is fine.");
        break;
    default:
        console.log("Q1: The aim of the game is to pick a color.");
}

//2
//3
//4

const percentageComplete = 70;

// Variante 1
if (percentageComplete < 30) {
    console.log("Q4: Still a long way to go");
} else if (percentageComplete >= 30 && percentageComplete <= 50) {
    console.log("Q4: Slowly getting there");
} else if (percentageComplete >= 51 && percentageComplete <= 80) {
    console.log("Q4: You can do it!");
} else if (percentageComplete >= 81 && percentageComplete <= 99) {
    console.log("Q4: This is the last push!");
} else {
    console.log("Q4: You're there. Well done!");
}

// Variante 2
if (percentageComplete === 100) {
    console.log("Q4: You're there. Well done!");
} else if (percentageComplete >= 81) {
    console.log("Q4: This is the last push!");
} else if (percentageComplete >= 51) {
    console.log("Q4: You can do it!");
} else if (percentageComplete >= 30) {
    console.log("Q4: Slowly getting there");
} else {
    console.log("Q4: Still a long way to go");
}
