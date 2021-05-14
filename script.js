// gloabl variables
const searchWord = "Gartenkralle";
let searchWordArray = [];
let searchWordLength = "";
let inputChar = "";
let attempts = 10;
let domList = document.querySelector("#wordsection");
/**
 * initial setup
 */
splitWord();
createFields();

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
 * get the keyboard input
 */
document.body.addEventListener("keyup", (event) => {
  inputChar = event.key;
  checkInput();
});

/**
 * check the keyboard input with the searchWord
 */
function checkInput() {
  if (attempts > 0) {
    for (let toValidate of domList.children) {
      let li = toValidate;
      let wordChar = li.getAttribute("data-char").toLowerCase();
      let pChar = toValidate.querySelector("p");

      if (wordChar === inputChar) {
        console.log(true);

        console.log(pChar);
        pChar.classList.remove("hidden");
      }

      /*if (wordChar === inputChar) {
        let pChar = document.querySelector(".hidden");
        console.log(pChar);
      }*/
    }
  } else {
    //game over
  }
}
