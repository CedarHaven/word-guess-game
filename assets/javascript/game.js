// the game is dinosaur themed. kind of. 
// I guess it's more prehistoric-themed, actually.
// it started dinosaur themed, but dinosaur names are like...ridiculously long, most of the time? and I needed at least a FEW shorter words. so I added things like 'raptor' and 'egg' and 'fossil' and then 'amber'...and then I added megalodon, because amber isn't remotely dinosaur related and who DOESN'T love a giant shark?
// anyway, this is the array of possible words you could have to guess.
var words = ["fossil", "pterodactyl", "jurassic", "triassic", "mesozoic", "cretaceous", "triceratops", "velociraptor", "parasaurolophus", "ichthyosaur", "pliosaur", "mosasaur", "liopleurodon", "minmi", "raptor", "egg", "amber", "megalodon", "trilobite"];

var wins = 0;
var losses = 0;

// an array. every time the user guesses a letter, I will check if the guess is already in the array. if it's not, it will be added to the array and then I'll check if your guess is in the string (and if it is, the word fills in on screen, and if it's not, you lose a guess). if it is, then I skip right over checking for the letter in the word and you don't lose a guess.
// this forever causes the array to start with an empty space when it cycles through, but I'm not sure how else to make it work.
var guessedLetters = [""];

// declared secretString and displayString, respectively the randomly selected word (secretString) and the dashes/word to be filled in as correct guesses are made (displayString)
var secretString = "";
var displayString = "";

// this is so we'll only start when the HTML is ready to go, because otherwise I was having some loading problems.
$(document).ready(function(){

    // the only way I could get the game to be consistently replayable was to make a display function that printed out things like the dashes for the string you'd be guessing and reset the 'guessedLetters' array to "" and 'guesses' to 6, then have the rest of the game in a function INSIDE display().
    document.onkeyup = function() {display()};

    function display(){
        // here we reset guessedLetters to empty, set the secretString to a new word, set helper to be the same as secretString, and populate displayString.
        guessedLetters = [""];
        secretString = words[Math.floor(Math.random() * words.length)];
        var helper = secretString;
        displayString = populate(secretString.length);

        // you get six guesses (lives? chances to be wrong?), because the way I usually played hangman is that for every wrong guess, you drew on 1. a head, 2. a body, 3. an arm, 4. the other arm, 5. a leg, and 6. the other leg. so. 6 guesses.
        // is this unfair, given some of these words? perhaps so. but that's standard hangman!
        // guesses resets to 6 whenever display() is called.
        var guesses = 6;

        // this displays the wins and losses, dashes, and the starting guess number in the HTML.
        displayScores(wins, losses);
        displayUnknownWord(displayString);
        displayGuesses(guesses);

        // this gets the div in the HTML that's meant to hold the letters you've guessed, and then also clears it out, in case this is a new game.
        var userGuessDiv = document.getElementById("guesses");
        userGuessDiv.innerHTML = "";

        game();

        function game(){
            document.onkeyup = function(event){
                var char = event.key.toLowerCase();
    
                // this checks if you've already guessed a letter or not; if it doesn't find the letter you enter in the array, it adds it to the array of guessed letters and carries on to see if the letter is in the word being guessed or not.
                if(!guessedLetters.includes(char)) {
                    guessedLetters.push(char);

                    // it also appends the guess to the div made in the HTML for keeping list of what you've guessed.
                    var insertGuess = document.createElement("span");
                    insertGuess.textContent = char+" ";
                    userGuessDiv.appendChild(insertGuess);
                        
                    // if your guess is included in the word, then it displays the letter in all the places it's found. if it's NOT in the word, you lose a guess.
                    if(secretString.includes(char)) {
                        while(helper.includes(char)){
                            var index = helper.indexOf(char);
                            helper = helper.replace(char, "-");
                            displayString = replaceAtChar(displayString, index, char);

                            // calling game again inside of it was the only way I could get it to repeatedly let people enter letters. while loops did not work for this. at all.
                            game();
                        }
                            
                        displayUnknownWord(displayString);
                    }
                    else {
                        guesses--;
                        displayGuesses(guesses);
                        game();
                    }
                }
                else {
                    // this is here so that in case you forget what you've already guessed and guess a letter you've already tried, game will keep going.
                    game();
                }
            }
    
            // in here I called back up to display so that whether you won or lost, the game would play again. I went with <= 0 because I was having a bug for a bit where sometimes guesses would increment to -1, and I couldn't figure out why, so I just...did this. just in case.
            // I did test this with both a win and a loss. it seemed to work fine.
            // for some reason, the display doesn't update to show your guesses as 0 when you lose, or the full word you entered when you win, or update the guessed letters for either, and I can't figure out why. I've tried moving the functions that update those things to be in the if statement here and it still doesn't work quite right.
            if(guesses <= 0) {
                losses++;
                displayScores(wins, losses);
                alert("Sorry, you lost. The word was "+secretString+".");
                display();
            }
            else if(displayString == secretString) {
                wins++;
                displayScores(wins, losses);
                alert("You won! The word was "+secretString+". Congratulations on correctly guessing it!");
                display();
            }
        }
    }
});

function populate(length) {
    var display = "";

    for(i = 0; i < length; i++) {
        display += "-";
    }

    return display;
}

function displayUnknownWord(displayString) {
    document.getElementById("word-game").innerHTML = displayString;
}

function displayGuesses(guesses) {
    document.getElementById("lives").innerHTML = "Remaining Guesses: "+guesses;
}

function displayScores(wins, losses) {
    document.getElementById("wins").innerHTML = "Wins: "+wins;
    document.getElementById("losses").innerHTML = "Losses: "+losses;
}

function replaceAtChar(inputString, indexToReplace, charToReplace) {
    var startString = inputString.substring(0, indexToReplace);
    var endString   = inputString.substring(indexToReplace + 1, inputString.length);
    
    return startString + charToReplace + endString;
}