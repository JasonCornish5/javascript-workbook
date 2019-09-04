Alright heres the plan:

Towers of Hanoi:

For this game to work I need to establish a method for moving a number between arrays. The easiest way to do this is to check what starting array/ending array the user inputs and create a variable tieing to the corresponding array in the stacks array. 

This variable should have the same name regardless of whether its tieing to a, b, or c so that it can be used easily in the coming code. (I.E. I don't want to have to write the code all over again for each array).

Once I've determined what starting and ending array the user selected I need to check if that move is valid. I can do this by running a for loop on every index in the chosen arrays and assigning their last values to a variable. Then I make an if statement checking if the last index of the ending array is larger than the starting arrays last value. If it is then print "Invalid move" and if not then pop the last value off the starting array and push it onto the ending array. 

Every time I execute this code I can check if the lengths of array b and c === 4. If so, then print 'You win!' and thats it!