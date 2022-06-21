'use strict'

/*const limit = 143
const bis = 219

if (limit > bis ) {
    console.log ("limit est plus grand de bis")
}


if (limit >= bis){
    console.log("limit est plus grand ou égale bis")
}

if (limit < bis) {
    console.log("limit est plus moin de bis")
}

if (limit <= bis) {
    console.log("limit est  moin de ou égeale bis")
}

if (limit === bis) {
    console.log("limit is not égale bis")
}
if  (limit !== bis){
    console.log ("limit it's not égale bis")
}  */



/*const limit = 50 
   const  scor = 64

if (scor >= limit) {
    console.log("Ok good !")
}
else {
    console.log ("Oh nooo...")
}
 */


/* const password ="azerty"
   const number = 5

if (password.length > number) {
    console.log("The password is secured")
    
}
else{
    console.log(" password isn't secured")

} 
*/


/*  
const limit = 50 
const scor = 64
const password ="azerty"
const number = 5

if (limit =< scor &&  password.length > number ){
    console.log ("Everthinge is good ")

}

else if (limit <= scor ||  password.length > number ){
    console.log ("Something is good ")

}

else {
    console.log ("Nothing is good")

} */



/*
 const min = 1
 const max = 6

 const random = Math.floor(Math.random () * max) + min

 console.log(random)
 
if (random === 6) {
    console.log("Yes i win")
    
}
else  {
 console.log("So close..")
}
*/

/*
let month ="jully"
switch (month) {

    case "january":
        console.log("It's Winter")
        
        break
    case "march" :
        console.log("It's Spring")
        
        break
    case "jully":
        console.log("It's Summer")
        
        break
    case "octobre":
        console.log("It's Fall")
        
        break

       default:
        console.log("It's not a saison")
        
}

*/



 /*
 let roundedNumber = 3.6

 if (Math.ceil(roundedNumber) - Math.floor(roundedNumber) > 0.5 ) {
    console.log("Math.floor(roundedNumber)")

 }
 else {
    console.log("Math.ceil(roundedNumber)")
 }
  
 
 */
 const roundedNumber = 322.6
 const roundedNumberString = roundedNumber.toString()
 let indexofpoint = roundedNumberString.indexOf(".") +1

 let substring = roundedNumberString.substring(indexofpoint) 
 substring = Number(substring)
 
 
 


if (substring >= 5) {
    console.log(Math.ceil(roundedNumber))

}
else{
    console.log(Math.floor(roundedNumber))
}


