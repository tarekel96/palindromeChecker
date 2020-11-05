const CONTAINER = document.querySelector("#container"),
        BTN_CONTINUE = document.querySelector("#btn-continue"),
        SECTION_MAIN = document.querySelector("#section-main"),
        FORM = document.querySelector("#form");

let word = document.querySelector("#word"),
        results = document.querySelector("#results");

const toggleForm = () => {
        if (SECTION_MAIN.style.visibility === "hidden") SECTION_MAIN.style.visibility = "visible";
        else SECTION_MAIN.style.visibility = "hidden";
}

const checkWord = (word) => {
        let wordArray = word.split("");
        let reverseArray = new Array();
        isPalindrome = true;

        for (let i = wordArray.length - 1; i >= 0; --i) {
                reverseArray.push(wordArray[i]);
        }

        for (let j = 0; j < wordArray.length; ++j) {
                if (wordArray[j] === reverseArray[j]) continue;
                else {
                        isPalindrome = false;
                        break;
                }
        }

        return isPalindrome;
}

const displayResults = (isPalindrome, word) => {
        if (isPalindrome) {
                CONTAINER.classList.remove("bg-animate");
                CONTAINER.classList.add("correct");
                results.innerHTML = word + " is a palindrome";
                setTimeout(() => CONTAINER.classList.remove("correct"), 3000);
        }
        else {
                CONTAINER.classList.remove("bg-animate");
                CONTAINER.classList.add("incorrect");
                results.innerHTML = word + " is not a palindrome";
                setTimeout(() => CONTAINER.classList.remove("incorrect"), 3000);
        }
        setTimeout(() => CONTAINER.classList.add("bg-animate"), 3000);
}

const handleSubmit = (event) => {
        event.preventDefault();

        let wordValue = word.value;
        wordValue = wordValue.toLowerCase();
        isPalindrome = checkWord(wordValue)

        if (isPalindrome) displayResults(true, wordValue);
        else displayResults(false, wordValue);

}

BTN_CONTINUE.addEventListener("click", () => toggleForm());

FORM.addEventListener("submit", handleSubmit);
