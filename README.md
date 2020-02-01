# Word Guess Game (Hangman)

This is a prehistoric (mostly dinosaur)-themed hangman game. You hit any key to being the game, at which point the game selects a random word, displays on screen the same number of dashes as there are letters in the word, and then lets you enter guesses until you either run out of guesses and lose or guess the word correctly. If you guess a letter correctly, the display fills in the appropriate letter in the appropriate spots. You get six guesses, because in traditional hangman, there's a guess for the head, body, both arms, and both legs. The game also keeps track of letters you've already guessed and displays them on screen for you to see, and also will not take a guess away if you guess the same letter multiple times.
If you win, you get an alert telling you that you've won and also what the word was; if you lose, you get an alert telling you that you've lost and also what the word was.

## Installation

You can use Git Bash to clone the repository onto your computer by entering the following in Git Bash:
```git clone https://github.com/juniperhaven/word-guess-game.git```
After doing so, open the folder you've downloaded, right click 'index.html' and open in your browser of choice.

Alternately, the project is hosted on Git Pages at https://juniperhaven.github.io/word-guess-game/

## Usage
On loading the page, a word will be automatically selected, and dashes will appear on screen showing you how long the word is:

![pageload](https://imgur.com/R4c4GoL.png)

Hit any key to start the game; after that, each letter you enter will be counted as a guess. Correct letters will be automatically filled in where they belong, and will also be added to the list of guessed letters underneath the word:

![correctguess](https://imgur.com/yEUb7Fs.png)

Incorrect letters will be added to the list of letters underneath the word as well, and each incorrect guess will subtract one from your six total guesses:

![wrongguess](https://imgur.com/84d5VyI.png)

If you win, you will be shown an alert saying you won and what the word was:<br>

![youwin](https://imgur.com/VePWef4.png)

If you lose, you will be shown an alert saying you lost and what the word was:<br>

![youlose](https://imgur.com/dZnKqKb.png)

In either case, clicking 'OK' will automatically cause the game to reset and choose a new word for you to guess.
Wins and losses will not reset and will be tracked in the sections that say 'wins' and 'losses'.

## Acknowledgements
CSS reset from here: https://meyerweb.com/eric/tools/css/reset/
Burlesque font (used for the first header) originally from here: https://www.1001fonts.com/burlesque-font.html; inclusion of the font was made possible by the Webfont Generator here: https://www.fontsquirrel.com/tools/webfont-generator
Skranji font (used for the second header) from Google Fonts.
Code for alphabetical() function found here: https://www.w3resource.com/javascript/form/letters-numbers-field.php
