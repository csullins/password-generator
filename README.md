GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

1. create generatePassword function to link to the button that presents a series of prompts for password criteria
    - pw min length, pw max length, lower;upper;num;spec characters, 


WHEN prompted for password criteria
THEN I select which criteria to include in the password
2. 


WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
3. 


WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
4. 


WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
5. 


WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
6. 

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
7. 