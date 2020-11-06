/* Wait until the DOM is loaded before any JS is done. */
window.onload = () => {
        /* DOM ELEMENT VARIABLES */
        const CONTAINER = document.querySelector("#container"),
                BTN_CONTINUE = document.querySelector("#btn-continue"),
                SECTION_MAIN = document.querySelector("#section-main"),
                FORM = document.querySelector("#form");
        let word = document.querySelector("#word"),
                results = document.querySelector("#results");

        /* Initilizate main section view state to hidden */
        SECTION_MAIN.classList.add("hidden");

        /* Toggles between visible/hidden states of the input form. */
        const toggleForm = () => {
                if (SECTION_MAIN.classList.contains("hidden")) {
                        SECTION_MAIN.classList.remove("hidden");
                        SECTION_MAIN.classList.add("visible");
                }
                else {
                        SECTION_MAIN.classList.remove("visible");
                        SECTION_MAIN.classList.add("hidden");
                }
        }
        /*
        * Determines whether a the word argument is a palindrome or not.
        * @name checkWord
        * @param {string} word - the user inputted word that will be checked if it is a palindrome or not.  
        * @return - returns true if it is a palindrome and false otherwise.
        */
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
        /*
        * Displays the answer to whether the inputted word is a palindrome or not.
        * @name displayResults
        * @param {bool} isPalindrome - true if the word is a palindrome and false otherwise.
        * @param {string} word - the user inputted word.  
        * @return - returns true if it is a palindrome and false otherwise.
        */
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
        /*
        * Handles the form submission logic.
        * @name handleSubmit
        * @param {Object} event - user event.
        */
        const handleSubmit = (event) => {
                event.preventDefault();

                let wordValue = word.value;
                wordValue = wordValue.toLowerCase();
                isPalindrome = checkWord(wordValue)

                if (isPalindrome) displayResults(true, wordValue);
                else displayResults(false, wordValue);

        }

        /* EVENT LISTENERS */
        BTN_CONTINUE.addEventListener("click", toggleForm);
        FORM.addEventListener("submit", handleSubmit);
}
