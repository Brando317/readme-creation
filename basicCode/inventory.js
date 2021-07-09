var seasons = ["Spring", "Summer", "Fall", "Winter"];

function printN(value) {
    console.log(value.toUpperCase());
}

// Print each season to the console after converting the letters to uppercase
seasons.forEach(printN);

let jacket1 = {
 color: "blue",
 season: "Spring",
 size: "M",
};
let jacket2 = {
 color: "black",
 season: "Winter",
 size: "L",
};
let jacket3 = {
 color: "tan",
 season: "Summer",
 size: "XXL",
};
let jacket4 = {
 color: "red",
 season: "Summer",
 size: "M",
};
let jacket5 = {
 color: "black",
 season: "Winter",
 size: "S",
};

const inventory = [];

inventory.push(jacket1, jacket2, jacket3, jacket4, jacket5);

console.log(inventory);

// Find the number of 'M' jackets
let mediumJackets = inventory.reduce(function (acc, jacket) {
 if (jacket.season == "Summer") {
 return acc + 1;
 } else {
 return acc;
 }
}, 0);

console.log(mediumJackets);