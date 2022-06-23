// 'use strict'

// /*
// ## 01 - Comparaison

// - Créez une const `test` de valeur `143` et une const `bis` de valeur `219`
// - Utilisez tous les opérateurs de comparaison avec ces variables et affichez les résultats

// const limit = 143
// const bis = 219

// if (limit > bis ) {
//     console.log ("limit est plus grand de bis")
// }


// if (limit >= bis){
//     console.log("limit est plus grand ou égale bis")
// }

// if (limit < bis) {
//     console.log("limit est plus moin de bis")
// }

// if (limit <= bis) {
//     console.log("limit est  moin de ou égeale bis")
// }

// if (limit === bis) {
//     console.log("limit is not égale bis")
// }
// if  (limit !== bis){
//     console.log ("limit it's not égale bis")
// }  */


// ## 02 - Condition

// - Créez une const `limit` de valeur `50` et une const `score` de valeur `64`
// - Créez une condition : si le score est supérieur ou égal à la limite, affichez "Ok good !", sinon affichez "Oh nooo..."
// - Changez la valeur de score pour changer le résultat
// /*const limit = 50 
//    const  scor = 64

// if (scor >= limit) {
//     console.log("Ok good !")
// }
// else {
//     console.log ("Oh nooo...")
// }
//  */


// /*
// ## 03 - Condition II

// - Créez une const `password` de valeur `"azerty"`
// - À l'aide d'une condition, affichez "The password is secure" si `password` a une longueur plus grande que 5

// const password ="azerty"
//    const number = 5

// if (password.length > number) {
//     console.log("The password is secured")
    
// }
// else{
//     console.log(" password isn't secured")

// } 
// */



// /*

// ## 04 - Condition III

// - Combinez les deux conditions précedents (exercices 2 et 3)
// - Afficher "Everything is good" si les deux conditions sont vraies
// - Afficher "Something is good" si une des deux conditions est vraie
// - Afficher "Nothing is good" si aucune des deux conditions n'est vraie

// const limit = 50 
// const scor = 64
// const password ="azerty"
// const number = 5

// if (limit =< scor &&  password.length > number ){
//     console.log ("Everthinge is good ")

// }

// else if (limit <= scor ||  password.length > number ){
//     console.log ("Something is good ")

// }

// else {
//     console.log ("Nothing is good")

// } */



// /*
// ## 05 - Random

// - Créez une const `random` qui contient une valeur aléatoire entre 1 et 6 (nombres entiers seulement)
// - À l'aide d'une condition, affichez "Yes I win !" si `random` est égal à 6, et "So close..." dans les autres cas
//  const min = 1
//  const max = 6

//  const random = Math.floor(Math.random () * max) + min

//  console.log(random)
 
// if (random === 6) {
//     console.log("Yes i win")
    
// }
// else  {
//  console.log("So close..")
// }
// */

// /*
// ## 06 - Month

// - Créez une const `month` de valeur `"January"`
// - À l'aide d'un switch, affichez "Winter", "Spring", "Summer" ou "Fall" selon la valeur du mois
// - Changez la valeur de `month` pour changer le résultat

// let month ="july"
// switch (month) {

//     case "january":
//         console.log("It's Winter")
        
//         break
//     case "march" :
//         console.log("It's Spring")
        
//         break
//     case "july":
//         console.log("It's Summer")
        
//         break
//     case "octobre":
//         console.log("It's Fall")
        
//         break

//        default:
//         console.log("It's not a saison")
        
// }

// */
// ## 07 - Rounded but better

// - Créez une variable `roundedNumber` de valeur `3.6`
// - En utilisant uniquement `Math.floor()`, `Math.ceil()`, des opérations mathématiques et un `if () {} else {}` reproduisez le comportement de `Math.round()`
// - Changez la valeur de `roundedNumber` pour tester l'algorithme que vous avez créé avec les valuers `3.3`, `3.8` et `12.4` et vérifier que ça marche bien dans tous les cas.


//  /*

//  ## 08 - Rounded but better, Méthode 2

// - Faire le même algo que l’exercice 7, cette fois ci avec `substring` et `indexOf`
// - On reste sur des décimales à 1 chiffre
//  let roundedNumber = 3.6

//  if (Math.ceil(roundedNumber) - Math.floor(roundedNumber) > 0.5 ) {
//     console.log("Math.ceil(roundedNumber)")

//  }
//  else {
//     console.log("Math.floor(roundedNumber)")
//  }
  
 
//  *
// /*







// ## 09 - Rounded but better, Méthode 3

// - Faire le même algo que l’exercice 7, cette fois ci avec `split`
// - On reste sur des décimales à 1 chiffre
//  const roundedNumber = 322.6
//  const roundedNumberString = roundedNumber.toString()
//  let indexofpoint = roundedNumberString.indexOf(".") +1

//  let substring = roundedNumberString.substring(indexofpoint) 
//  substring = Number(substring)
 
 


// if (substring >= 5) {
//     console.log(Math.ceil(roundedNumber))

// }
// else{
//     console.log(Math.floor(roundedNumber))
// }

// */







