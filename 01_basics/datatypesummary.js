//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//************************************************** */
// stack memory (primitive)  ek ke uper ek stack store hota hai
//stack memory me refrence lene se uska copy milta hai

// heap memory(non primitive) heap memory me wapas refrence lene per
//  copy nhi milta original value milti hai

 let myYoutubename = "Hiteshchaudharydotcom"
 let anothername = myYoutubename
  anothername = "chaiaurcode"

console.log(myYoutubename);
  console.log( anothername );

  let userone ={
    email : "userone@gmail.com",
    Upi : "user@ybl"
  }

   usertwo.email  = "nehachauhan@google.com"                    //object me dot  lagaka value change karte hai
   console.log(userone.email);
   console.log(usertwo.email);