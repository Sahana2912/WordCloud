let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let errorMsg = "Please enter a word";

function createAndAppendWordToWordCloud(userEnteredWord) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let word = document.createElement("span");
    word.textContent = userEnteredWord;
    word.style.fontSize = randomFontSize;
    word.classList.add("m-3");

    wordContainer.appendChild(word);
}
for (let word of wordCloud) {
    createAndAppendWordToWordCloud(word);
}

function addBtn() {

    let userEnteredWord = userInput.value;

    if (userEnteredWord !== "") {
        userInput.value = "";
        errorMsgEl.textContent = "";
        createAndAppendWordToWordCloud(userEnteredWord);

    } else {
        errorMsgEl.textContent = errorMsg;
    }
}