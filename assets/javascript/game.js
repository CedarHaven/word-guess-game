// the game is dinosaur themed. kind of. 
// I guess it's more prehistoric-themed, actually.
// it started dinosaur themed, but dinosaur names are like...ridiculously long, most of the time? and I needed at least a FEW shorter words. so I added things like 'raptor' and 'egg' and 'fossil' and then 'amber'...and then I added megalodon, because who doesn't love a giant shark?
var words = ["fossil", "pterodactyl", "jurassic", "triassic", "mesozoic", "cretaceous", "triceratops", "velociraptor", "parasaurolophus", "ichthyosaur", "pliosaur", "mosasaur", "liopleurodon", "minmi", "raptor", "egg", "amber", "megalodon", "trilobite"];

// you get six guesses (lives? chances to be wrong?), because the way I usually played hangman is that for every wrong guess, you drew on 1. a head, 2. a body, 3. an arm, 4. the other arm, 5. a leg, and 6. the other leg. so. 6 guesses.
// is this unfair, given how long most of these words are? perhaps so. but oh well.
var wins = 0;
var losses = 0;
var guesses = 6;

// an array. every time the user guesses a letter, the guess will be appended to the array...and when you guess again, it will check the array to see if you've already guessed that letter. I hope. I'm not sure what will happen if I attempt to cycle through an empty array.
var usedGuesses = [""];

/* example of what I'm trying to do and some thoughts on the rest of the game stuff.
// this forever causes the array to start with an empty space when it cycles through, but I'm not sure how else to make what I've done work.
var empty = [""];
var check = false;
var guess = 6;

document.onkeyup=function(event) {
    var keyEnter = event.key.toLowerCase();

    for(i = 0; i < empty.length; i++){
        if(empty[i] == keyEnter){
            alert("wow, how?");
            console.log(empty[i]);
            check = false; // false, because we don't need to append the key pressed to the array--it's already in there.
        }
        else{
            alert("does this work?");
            console.log(empty[i]);
            check = true; // true, because we DO need to append it to the array--it's not in there yet.
            }
    }

    // if we didn't find the guess in the array--append.
    if(check){
        empty.push(keyEnter);
    }
    // if we didn't find it in the array, do nothing, because it's already in there (so you already tried it), which means regardless of if it's in the word or not, you don't lose a guess.

    // we return check to false. I'm not sure if this is needed but I'm very brain foggy right now and I'm putting it in anyway.
    check = false;

    // I am also going to have to then have an array run through the string, and check if the letter guessed (as long as it wasn't found in the array already) is in the word. and if it's not in the word, you lose a guess. if it is in the word, we fill in the spaces where the letter appears.
    // and I am going to have to create a section for the letters guessed, and when a guess is entered that ISN'T found in the array appears, we append that guessed letter to the <div> for the guesses. this should happen in the same section where the letter is appended to the array of guesses.
    // fuck. I've just realized: I need this to be a global variable, because it can't be getting re-declared every single time there's a keypress, but that means that at the end of the game the array will be full of guesses--AH. make a function that, on win or loss, clears the array back to just "". so...I'll need a win condition and then at the end of each keypress, I'll have to check if the win condition or the loss condition are true, and if either is true, reset the array to "", and if neither is true, leave the array alone.
    // and I just realized the game is supposed to start generating on a keypress. FUCK. I don't know. I'm lost and confused and everything sucks today, because I HAVE to use the keypress to append to the array of guesses and check....maybe I should have an initial keypress, and then after that every keypress registers with the stuff that appends to the array and things? can I do that?? can I run a function only if the game has started?
    // https://stackoverflow.com/questions/28069638/check-if-function-returns-true-to-execute-another-function/28069688 ?
    // have the initial document.onkeypress start the game, by setting a boolean to true and returning its value (global boolean? gameStart = false to begin with?), and then once the boolean is true, jump to running a game function, which will then select a word from the array, print out the empty spaces for the word, start logging user guesses in the array and all, and start counting guesses and wins and losses and checking for if the user guss is in the word, and if the user runs out of guesses they lose (losecondition true) and if they get all the letters in the word they win (wincondtion true), and then when win or lose is true, the game...resets?
    // YES! the game resets, using a 'return', like so: https://stackoverflow.com/questions/2940862/javascript-how-to-restart-a-function-from-inside-it where 'condition' will be 'winCondition' || 'loseCondition'. which will both default start as false. I think I should declare them false inside the game function, as opposed to having them be global variables.
    // I am not sure how to check if the user has successfully guessed all the letters in the word. vague concept I have right now: an array that holds the correct guesses, and cycling through the string or array each time there's a correct guess to check if they have all the letters in the word in the array yet. cycle through with a foor loop, have an if statement, use a boolean, set to 'true' each time that it finds a letter in the array that matches a letter in the string, and set it to 'false' if it finds a letter in the word that's not in the array?
    // I would need to start with a for loop equal to the string length of the word being used. then have a for loop that cycles through the entire 'correctGuess' array on each letter. and then inside THAT for loop, if it finds a letter that matches the string's letter, it sets some condition to true? but if it doesn't it sets it to false? problem: as it cycles through, it's going to inevitably find a matching letter and then a non-matching letter.
    // is there a way to build a string containing the correct guesses in the exact same order as the actual word? and then have an if statement checking if the guessed string is exactly equal to the used word yet? and then if it is, winCondition is true and wins increments by one, and if it's not, then nothing changes?
    // something like this, maybe: https://stackoverflow.com/questions/4364881/inserting-string-at-position-x-of-another-string/4364902 ?
    // run through string after user guess. go until string is completed. each time the user guess matches a character in the string, fill in the character at that location with the user guess letter on screen, and also add the user guess to the userguess string at the same index as the actual word string?
    // and then once the entire string has been run through, check if the userguess string == the word string yet.
    // and of course, if we complete the entire string without finding the userguess matched anywhere in the string, we're going to have to subtract a guess--maybe a boolean that's default set at false, sets itself to true if we find the userguess letter in the string, and then is reset to false after the check for (did we find the guess in the string, if no, guess--), is complete?
    // and then after we do the check for 'guess--', we check if guess is > 0, and if it's not, then the game is over and everything resets and losses increments by one.
} */