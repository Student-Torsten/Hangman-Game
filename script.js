// gloabl variables
const searchWord = "Donaudampfschifffahrtsrückversicherungsgesellschaft";
let searchWordArray = [];
let searchWordLength = 0;
let inputChar = "";
let attempts = 10;
let leftAttempts = 10;
let wrongKeys = [];
let domList = document.querySelector("#wordsection");

/**
 * initial setup
 */
restart();

/**
 * restart button & function
 */
let restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", restart);

function restart() {
  //delete the list entrys from last game
  let main = document.querySelector("#wordsection");
  if (main != null) {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
  }
  // delete the list of wrong keys from last game
  let wrongAttempts = document.querySelector("#wrongAttempts");
  if (wrongAttempts != null) {
    while (wrongAttempts.firstChild) {
      wrongAttempts.removeChild(wrongAttempts.firstChild);
    }
  }
  //initialize the new and reset the wrong key counter
  splitWord();
  createFields();
  wrongKeys.length = 0;
  countWrongAttempts();
}

/**
 * split the seachword in the characters
 */
function splitWord() {
  searchWordArray = searchWord;
  searchWordLength = searchWord.length;
}

/**
 * create a div as a field for each character
 */
function createFields() {
  let main = document.querySelector("#wordsection");

  for (let i = 0; i < searchWord.length; i++) {
    let characterFromArray = searchWord[i];

    let characterField = document.createElement("div");
    let characterplace = document.createElement("p");
    characterField.setAttribute("data-char", characterFromArray);
    characterField.classList.add("characterbox");
    characterplace.classList.add("hidden");
    characterplace.classList.add("inline");

    characterplace.innerText = characterFromArray;
    main.append(characterField);
    characterField.append(characterplace);
  }
}
/**
 * display the wrong attempts / keys
 */
function displayWrongKeys() {
  let wrongAttempts = document.querySelector("#wrongAttempts");
  if (wrongAttempts != null) {
    while (wrongAttempts.firstChild) {
      wrongAttempts.removeChild(wrongAttempts.firstChild);
    }
  }
  for (let i = 0; i < wrongKeys.length; i++) {
    let characterFromArray = wrongKeys[i];
    let characterplace = document.createElement("p");
    characterplace.innerText = characterFromArray + ", ";
    wrongAttempts.append(characterplace);
  }
}

/**
 * get the keyboard input
 */
document.body.addEventListener("keyup", (event) => {
  inputChar = event.key;
  checkInput();
});

/**
 * check the keyboard input with the searchWord, write the wrong input in the array
 */
function checkInput() {
  if (attempts > 0) {
    let counter = 0;

    for (let toValidate of domList.children) {
      let li = toValidate;
      let wordChar = li.getAttribute("data-char").toLowerCase();
      let pChar = toValidate.querySelector("p");

      if (wordChar === inputChar) {
        counter = counter + 1;
        pChar.classList.remove("hidden");
      }
    }
    let check = wrongKeys.includes(inputChar);

    if (counter === 0 && check === false) {
      wrongKeys.push(inputChar);
      displayWrongKeys();
    }
  }
  countWrongAttempts();
}
/**
 * update and display the left attempts
 */
function countWrongAttempts() {
  leftAttempts = attempts - wrongKeys.length;
  let domAttempt = document.querySelector("#attempts");
  let counter = document.createElement("p");
  counter.innerText = leftAttempts;
  counter.classList.add("counter");
  let counterp = document.querySelector(".counter");
  if (counterp != null) {
    counterp.remove();
  }
  domAttempt.append(counter);
  gameOver();
}

/**
 * game over
 */
function gameOver() {
  if (leftAttempts === 0) {
    alert("game over!");
  }
}
