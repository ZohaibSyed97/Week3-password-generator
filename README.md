# 03 JavaScript: Password Generator

// https://zohaibsyed97.github.io/Week3-password-generator/
// https://github.com/ZohaibSyed97/Week3-password-generatorgi
// my first challenge was to generate random string, however with the help of google research I was able to find the code needed to print alphabetical characters, I had to create a variable called alphabet which included all the letters of the alphabet then use the .Math function to randomly select one of the letters from the variable "alphabet".
My second challenge was to print lower and upper case when needed so i used .toString function which was pretty easy to fix just needed to read the code through again, to find it.
My final and most difficult challenge was to generate the same amount of characters user asked for, with my first try, when checked the code the code only ran once and only printed 3 characters, to iterate the if statements again and again until password length was as desired. But when I added for loop in each statement only the first statement would fill up the password length, so to make for loop run only form one statement, I had to add logical operators && and || to compare all the possible outcomes, for example: include all characters(lower and upper case, numbers and special characters) and the other outcomes, only lowers, only uppers, only numbers, only special characters, or two of these, etc... but this made my code way too long. after small break and rest I came up with a solution I added all the if statements inside the for loop and make it run until desired password length reached, so this way I only had to right once if the user wanted lower case, upper case, number and special character and then the loop would iterate and check if the value is yes then generate random character. over all I'm happy with the my code but could have improved if all teh characters would be generated and random order and number without having to generate one by one, this would have made it more securer. however I did not have enough time to research about that to find a solution and apply before due date/time.

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> - A repository that has no code
>
> - A repository that includes a unique name but nothing else
>
> - A repository that includes only a README file but nothing else
>
> - A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository that contains application code.

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

- The URL of the deployed application.

- The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
