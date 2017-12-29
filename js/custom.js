// two global variables
var currentWord;
var ignoredWords = [];

// generates new word and puts it in ID randomizedWord
function generateRandomWord() {
  // make element as a container
  var currentWordContainer = document.getElementById("randomizedWord");
  // generate random number between 0-1 and multiply it by words number
  var newWordIndex = Math.floor(Math.random() * allWords.length);
  // use this index to catch word from full list
  var newWord = allWords[newWordIndex];
  // check, if new word is on ignoredWords list
  var isNewWordOnIgnoredList = ignoredWords.indexOf(newWord.eng) !== -1;

  // if YES- return and generate new word
  if (isNewWordOnIgnoredList) {
    return generateRandomWord();
  }
  // if NO- set it to global currentWord
  currentWord = newWord;

  // show word in a container
  currentWordContainer.innerHTML = currentWord.eng + " - " + currentWord.pol;
}


// adding word to ignoredWords array and generate new word
function addToIgnored() {
  ignoredWords.push(currentWord.eng);
  generateRandomWord();
  console.log(currentWord.eng);
}


// onload method to check, if we have words list before generate new word
window.onload = function () {
  if (!allWords) {
    console.error('Load allWords.js before loading this script.');
    return false;
  }
  generateRandomWord();
}

// eventListeners, because button.onClick is lame
document.getElementById("newWord").addEventListener("click", generateRandomWord);
document.getElementById("alreadyKnown").addEventListener("click", addToIgnored);
document.getElementById("iLearnedIt").addEventListener("click", addToIgnored);