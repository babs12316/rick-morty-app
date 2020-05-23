### How To run project
1. Use 'git clone https://github.com/babs12316/rick-morty-app.git' to create project directory
2. Go to project directoy and use 'npm install' to install all node dependencies
3. Run 'npm start' to start project,Open (http://localhost:3000) to view it in the browser.
4. For unit testing run 'npm test'

### Project Information
- Project gets charcter information from Rick & Morty Api 
- User can filter character by date and species 
- Using pagination user can move to next and previous page
- User can click on character to get detail information about it

### Technical details
- Rick Morty app is implemented in React using React Hooks
- Nested componet tree is implemented to pass information using props 
- Fetch Api is used to get data and error is handled using try catch
- Routing is used to navigate between list and detail view
- Unit testing is done using Enzyme 
- Bootstrap is used to implement responsive layout

### Project Structure
- All component are stored in components folder
- For each component a serprate folder is created in components
- This folder contains all files related to component such as js,css,test
