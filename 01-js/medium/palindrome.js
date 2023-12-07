/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = '';

  //Remove all non-alphanumeric characters
  for(let i=0; i<str.length; i++) {
    if(str[i]>='A' && str[i]<='Z' || str[i]>='a' && str[i]<='z') newStr += str[i];
  }
  
  newStr = newStr.split(' ').join('').toLowerCase()
  reverseStr = newStr.split('').reverse().join('');
  
  return (reverseStr === newStr) 
}

module.exports = isPalindrome;
