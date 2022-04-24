# Grassland Angular Coding Challenge

### Prerequisites

- Install git
- Follow the [Angular Setup Guide](https://angular.io/guide/setup-local) if you do not already have Node.js, NPM, Angular CLI, etc, installed

### Install / Setup

- Create a repository from this template
  - Make sure you are signed in to your GitHub Account
  - Click the green 'Use This Template' Button
  - Create a **public repo**, name it 'grassland-coding-challenge'
- Clone/Download the new repository to your computer
  - While viewing your repository in GitHub, click the green 'Code' button
  - Use the given command to clone the repository from Terminal
  - OR choose 'Download ZIP', and unzip after downloading
- In Terminal (Command Line), navigate to the location of the repository
- Use this command to install the dependencies: `npm install`
- Then use this command to start the local server for development: `ng serve`
- Open your web browser, and navigate to http://localhost:4200/
- Create a new branch for your code changes, name the branch 'GV-1'

### Time Constraints

- This coding challenge is intended to take less than 6hrs to complete 

### Goals

This is a simple Angular app that displays data in a table.
The angular components (such as the table) use a library called [Angular Material](https://material.angular.io/).
The data comes from an api called [FruityVice](https://www.fruityvice.com/).

1. Add a 'Carbohydrates' and 'Sugar' column to the data table
   - Add 2 new columns at the end of the table for the carbohydrate and sugar data respectively
   - These data points are found on the fruit response from the api
   - Commit these changes with the following commit message: 'Goal 1'
   
2. Add filtering and sorting methods
   - Add a text input above the table for real time filtering
   - Filter the table rows based on the text in the input (should check text in the following properties: 'genus', 'name', 'family', 'order')
   - Add a dropdown input beside the text filter input (above the table) with the following options:
     - 'Name Ascending'
     - 'Name Descending'
     - 'Carbohydrates Ascending'
     - 'Carbohydrates Descending'
   - Sort the data in the table based on the selected sort option
   - Commit these changes with the following commit message: 'Goal 2'

3. Additional Styling
   - Style the table rows to alternate background colors between #FFFFFF and #FAFAFA
   - The text in the last column should be right-aligned
   - If the 'calories' column value is less than or equal to 50, then make the calories text **bold**
   - If the 'calories' column value is less than or equal to 50 AND the 'sugar' column value is greater than or equal to 8, then style the entire row background color to #31BF5D
   - Commit these changes with the following commit message: 'Goal 3'
   
***BONUS***

- Create a dialog modal to be opened when any row in the table is clicked. [Angular Material Dialog](https://material.angular.io/components/dialog/overview).
- The modal should contain all information about the fruit (id, genus, name, family, order, nutritions (carbohydrates, protien, fat, calories, sugar))
- The header for the modal should be the name of the fruit
- The modal should have a close button 
- Get creative! This is your time to show off some CSS and creative styling.
- Commit these changes with the following commit message: 'Bonus Task'
   
### Final Submission

- When you are ready, commit any final changes to your 'GV-1' branch.
- Submit a pull request with your changes to 'main' in the github repository.
- The PR should contain the following
  - Brief summary of the changes
  - A screenshot of the original app
  - A screen recording of the completed app (showing the style changes to the table, as well as performing a search and filter, opening the modal if   completeted)
- Send a link to the PR to andrew@grasslandventures.ca with any feedback and notes about hurdles or issues experienced.

### Helpful Resources

- [FruityVice Api Documentation](https://www.fruityvice.com/)
- [Material Angular Documentation](https://material.angular.io/components/categories)
- [Official Angular Docs](https://angular.io/docs)





