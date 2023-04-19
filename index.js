const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased () {

const newarray= tutorials.map (function (eachSentence) {
 const capitalizeWords = eachSentence.split(' ').map(function (eachWord){
     return eachWord.charAt(0).toUpperCase() + eachWord.slice(1)
  })
  return capitalizeWords.join(' ')
  })
  return newarray
}






// function map (array){
//   // make a new array 
//   for (const item of array){ // Iteration along the array 
//  Callback(element)  // Callback on elements during iteration 
//  // push elements using .push into new array 
//  // newArr.push(callback(element));


//   }
// }