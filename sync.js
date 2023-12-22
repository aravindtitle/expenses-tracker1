console.log('person1: shows ticket');
console.log('person2: shows ticket');


const premovie = async () => {

const promisewifebringingticks = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('ticket');
    }, 3000)
});
const getpopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

const getcandy = new Promise((resolve, reject) => resolve(`candy`));
const getcoke = new Promise((resolve, reject) => resolve(`coke`));

let ticket = await promisewifebringingticks;

let[popcorn, candy, coke] = await Promise.all([getpopcorn, getcandy, getcoke]);

console.log(`${popcorn}, ${candy}, ${coke}`);

/*let ticket = await promisewifebringingticks;

console.log('wife: i have the tics');
console.log("husband: we should go in");
console.log("wife: no im hungry");

let popcorn = await getpopcorn;
console.log(`husband: i got some ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: i need butter on my popcorn');

let butter = await addbutter;

console.log(`husband: i got some ${butter} on popcorn`)
console.log(`husband: anything else darling?`)
console.log(`wife: lets got we are getting late`)
console.log(`husband: thank you for the reminder *grins*`)*/

return ticket
};
premovie().then((m) => console.log(`person3: shows ${m}`));




console.log('person4: shows ticket');
console.log('person5: shows ticket');