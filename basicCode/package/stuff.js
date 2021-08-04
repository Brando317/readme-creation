class person {
constructor(name = "Brando",
pet = "one",
residence = "TwoHouses", 
hobbies = "hiking, crossfit, rockclimbing, shooting",
politics = false)
{
this.name = name;
this.pet = pet;
this.residence = residence;
this.hobbies = hobbies;
this.isParticipatingIn = false;
}
participatingIn()
{
this.isParticipatingIn = "true"
console.log(`constructor`);
}}
let name = new person("Brando", "one", "TwoHouses", ["hiking", "crossfit", "rockclimbing", "shooting"], false)
name.participatingIn()