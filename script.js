// gloabl variables
const searchWord = "Gartenkralle";
let searchWordArray = [];
let searchWordLength = "";
let inputChar = "";

/**
 * initial setup
 */
splitWord();

/**
 * split the seachword in the characters
 */
function splitWord() {
  searchWordArray = searchWord.split("");
  searchWordLength = searchWordArray.length;
}

/**
 * create a div as a field for each character
 */
function createFields() {
  let main = document.querySelector("#wordsection");

  for (let i = 0; i < searchWordLength; i++) {
    let characterFromArray = searchWordArray[i];

    let characterField = document.createElement("div");
    let characterplace = document.createElement("p");

    characterField.classList.add("characterbox");
    characterplace.classList.add("hidden");
    characterplace.classList.add("inline");

    characterplace.innerText = characterFromArray;
    main.append(characterField);
    characterField.append(characterplace);
  }
}

/**
 * get the keyboard input
 */
document.body.addEventListener("keyup", (event) => {
  inputChar = event.key;
  console.log(inputChar);
});
