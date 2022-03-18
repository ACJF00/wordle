## Funtionnals requirements


## Gameplay

6 tries to guess a 5-letter word

## Making a guess

Detect keypresses
    - If it's a letter
         - update "letters" attribute
         - update tile markupbased on letters value 
    - If keypress is backpage
        - delete last letter and "letters"
        - Update tile markup based on "letters"

Don't rune update function if "letters" = 5

## Pick a solution word

Store solution xords in JSON / array
When game is loaded, choose random item from array
Set solution to that word

## Submit guess

Pressing enter will summit guess
    - compare the guessed word to the solution word (each letter)
    - reveal the letter guesses and update state/color
    - if all letters are correct, game is won


Typing in the letter will display the letter iin the tile
Backspace will delete letters
Enter will submit guess

Guesses must be a real word in word list
Guess colors (data-state):
    - gray = absent
    - yellow = present wrong position
    - green = correct

Hard mode: present or correct letters must be used in subsequent guesses

Guesses are saved in local storage

## Design

Tiles 5x6
Virtual keyboard

## Interactions

When typing a letter:
    - The border of the tiles changes to light gray
    - blinking animatiuons with letter
    - backspace will remove letters

When submitting a guess:
    - tiles will flip up and background color will change