# tic-tac-toe

The tic-tac-toe’s three by three grid is in the form of an object with its keys representing each of the nine sections. Upon the choices made by each player, 
the string player1 or player2 will be assigned to a section/key as its value.

Each section has its own function. In them, the string in the array called firstChoice will be allotted to the variable let captureFirstChoice when the very first 
section is chosen. Next, a whole number and a string, which denotes the section that will be shown in the console, are passed as values via the function’s gridAll parameters.

If the first conditional in gridAll meets the stipulation that captureFirstChoice and firstChoice1 is true, then player number 1 will be assigned 
to a section: this is done by way of a key in the object being paired with the variable let player, whose value starts off as player1. The key’s numeral is 
determined by the parameter val, whose value is the aforementioned whole number. The variable let lever—found outside the conditional—has a value of off assigned to 
it is then turned off—i.e. a value of on assigned to it.

The second conditional determines if it is player number 2 turn by judging any key/section paring made with value player1 to be false. A value of player2 is assign 
to the variable player and a nested conditional allows for a choice of a section to be made so long as player is player2 and the lever had been turned on. The lever 
is then turned off.

Now with the key/section pairing with the value player2 being regarded as false and the lever being off, player number 1 can take his turn.

The last line in function gridAll calls the function validation, where all combinations that yield a winner are housed as conditionals. 

