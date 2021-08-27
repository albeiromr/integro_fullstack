function isPalindrome(expression) {
  //regex to remove unwanted characters
  const regex = /[^A-Za-z0-9]/g;
  //transform string into lowercase and removing unwanted characters with the regex
  const proccessedInput = expression.toLowerCase().replace(regex, "");
  //reversing string to verify its reading
  const reversedInput = proccessedInput.split("").reverse().join("");
  //verifying if proccessedInput and reversedInput are the same
  return reversedInput === proccessedInput;
}

expression = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";

module.exports = {isPalindrome};
