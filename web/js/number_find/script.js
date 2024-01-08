var randomNumber = Math.floor(Math.random() * 100) + 1;

var guess = document.querySelector(".guesses")
var lastResult = document.querySelector(".lastResult")
var lowOrHigh = document.querySelector(".lowOrHi")

var guessSubmit = document.querySelector(".guessSubmit")
var guessField = document.querySelector(".guessField")

var countGuesses = 1
var resetButton;

function checkGuess() {
    var userGuess = Number(guessField.value)

    if (guessField === 1) {
        guess.textContent = "Previous guesses: "
    }

    guess.textContent += userGuess += " "

    if (Number(userGuess) === randomNumber) {
        lastResult.textContent = "Congratulations! You're right"
        lastResult.style.backgroundColor = "green"
        lowOrHigh.textContent = ""

        endGame()
    } else if (countGuesses === 10) {
        lastResult.textContent = "Game over!"
        lowOrHigh.textContent = ""

        endGame()
    } else {
        lastResult.textContent = "Wrong number..."
        lastResult.style.backgroundColor = "red"

        if (userGuess < randomNumber) {
            lowOrHigh.textContent = "Your Guess is low"
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = "Your Guess is high"
        }
    }

    countGuesses++
    guessField.value = ""
    guessField.focus()
}

guessSubmit.addEventListener("click", checkGuess)

function endGame() {
    guessField.disabled = true
    guessSubmit.disabled = true

    resetButton = document.createElement("button")
    resetButton.textContent = "Start new game"

    document.body.appendChild(resetButton)

    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    countGuesses = 1

    var resetParams = document.querySelectorAll(".resultParas p")

    for (var i = 0; i < resetParams.length; i++) {
        resetParams[i].textContent = ""
    }

    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false
    guessSubmit.disabled = false

    guessField.value = ""
    guessField.focus()

    lastResult.style.backgroundColor = "white"

    randomNumber = Math.floor(Math.random() * 100) + 1
}