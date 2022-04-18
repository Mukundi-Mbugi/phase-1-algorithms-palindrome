let word=''
function isPalindrome(word){
  if(word.toLowerCase()===word.toLowerCase().split('').reverse().join('')){
    return true
  }
  else{
    return false
  }
}

console.log(isPalindrome('abba'))

/* 
  Add your pseudocode here
  function isPalidrome('string')
  string.toLowercase
  if statement
  string===string.toLowerCase().split('').reverse().join('')
  return true
  else statement
  return false
*/

/*
  Add written explanation of your solution here
  Declare empty string word
  write isPalidrome function which:
  1.takes the string as argument
  2.compare the string 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
