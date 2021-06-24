function checkAge (userName, age)
{
let below16 = "Sorry "+userName+", but you are too young to drive";
let above16 = "congrats"+userName+", you are able to drive";
if (age < 16) {
    console.log(below16)
}
else {
    console.log(above16)
}}
checkAge ("brando", 30)