class CookBook {
 constructor() {
 this.recipes = [];
 }

 addRecipe(recipe) {
 this.recipes.push(recipe);
 }

 read(recipe) {
 if (recipe) {
 let found;
 this.recipes.forEach(function (value) {
 if (value.name == recipe) {
 found = value;
 }
 });
 if (found) {
 found.displayIngredients();
 found.displayDirections();
 } else {
 console.log("Could not find the recipe you were looking for :(");
 }
 } else {
 this.recipes.forEach(function (recipe, idx) {
 console.log(`${idx + 1} | ${recipe.name}`);
 });
 }
 }
}

class Recipe {
 constructor(name, category, ingredients, duration, directions, servings) {
 this.name = name;
 this.category = category;
 this.ingredients = ingredients;
 this.duration = duration;
 this.directions = directions;
 this.servings = servings;
 this.rating = null;
 }

 rate(liked, total) {
 this.rating = `${liked}/${total}`;
 }

 displayIngredients() {
 this.ingredients.forEach(function (value) {
 console.log(`${value.measurement} of ${value.name}`);
 });
 }

 displayDirections() {
 console.log(this.directions);
 }
}

let cookbook = new CookBook();

cookbook.addRecipe(
 new Recipe(
 "Pancakes",
 "Breakfast",
 [
 { name: "milk", measurement: "1 cup" },
 { name: "eggs", measurement: "2 whole eggs" },
 { name: "flour", measurement: "2 cups" },
 ],
 "10 minutes",
 "These are the directions ... blah. Now you have pancakes! Enjoy!",
 4
 )
);
cookbook.addRecipe(
 new Recipe(
 "Steak",
 "Dinner",
 [
 { name: "meat", measurement: "1 whole" },
 { name: "seasoning", measurement: "cover" },
 ],
 "30 minutes",
 "These are the directions ... blah. Now you have Steak! Enjoy!",
 1
 )
);
cookbook.addRecipe(
 new Recipe(
 "BLT",
 "Lunch",
 [
 { name: "Bacon", measurement: "3 whole strips (9 pieces)" },
 { name: "Lettuce", measurement: "to taste" },
 { name: "Tomato", measurement: "5 slices" },
 ],
 "15 minutes",
 "These are the directions ... blah. Now you have blt! Enjoy!",
 1
 )
);

cookbook.read("Pancakes");


-- 
 
Homeclass CookBook {
 constructor() {
 this.recipes = [];
 }

 addRecipe(recipe) {
 this.recipes.push(recipe);
 }

 read(recipe) {
 if (recipe) {
 let found;
 this.recipes.forEach(function (value) {
 if (value.name == recipe) {
 found = value;
 }
 });
 if (found) {
 found.displayIngredients();
 found.displayDirections();
 } else {
 console.log("Could not find the recipe you were looking for :(");
 }
 } else {
 this.recipes.forEach(function (recipe, idx) {
 console.log(`${idx + 1} | ${recipe.name}`);
 });
 }
 }
}

class Recipe {
 constructor(name, category, ingredients, duration, directions, servings) {
 this.name = name;
 this.category = category;
 this.ingredients = ingredients;
 this.duration = duration;
 this.directions = directions;
 this.servings = servings;
 this.rating = null;
 }

 rate(liked, total) {
 this.rating = `${liked}/${total}`;
 }

 displayIngredients() {
 this.ingredients.forEach(function (value) {
 console.log(`${value.measurement} of ${value.name}`);
 });
 }

 displayDirections() {
 console.log(this.directions);
 }
}

let cookbook = new CookBook();

cookbook.addRecipe(
 new Recipe(
 "Pancakes",
 "Breakfast",
 [
 { name: "milk", measurement: "1 cup" },
 { name: "eggs", measurement: "2 whole eggs" },
 { name: "flour", measurement: "2 cups" },
 ],
 "10 minutes",
 "These are the directions ... blah. Now you have pancakes! Enjoy!",
 4
 )
);
cookbook.addRecipe(
 new Recipe(
 "Steak",
 "Dinner",
 [
 { name: "meat", measurement: "1 whole" },
 { name: "seasoning", measurement: "cover" },
 ],
 "30 minutes",
 "These are the directions ... blah. Now you have Steak! Enjoy!",
 1
 )
);
cookbook.addRecipe(
 new Recipe(
 "BLT",
 "Lunch",
 [
 { name: "Bacon", measurement: "3 whole strips (9 pieces)" },
 { name: "Lettuce", measurement: "to taste" },
 { name: "Tomato", measurement: "5 slices" },
 ],
 "15 minutes",
 "These are the directions ... blah. Now you have blt! Enjoy!",
 1
 )
);

cookbook.read("Pancakes");


-- 
Ben Bryant
TrueCoders FSWD Instructor
(205) 894-9807
bbryant@truecoders.io
www.truecoders.io
IG: @truecodersio
Facebook: TrueCoders

Quick Reply
To: Ben Bryant <bbryant@truecoders.io>
More Reply Options
 
Send  Save Draft    Include quoted text with reply

« (20%) of your 15360 MB
Last account activity: 6 minutes ago at IP 2600:1702:1110:4c30:c806:fead:2a0a:50c6.  Details
Gmail view: standard | basic HTML  Learn more
Terms - Privacy - Gmail Blog - Google Home