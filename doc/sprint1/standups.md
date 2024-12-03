# StandUps

# 18 Nov 2024 - Sprint 1 Standup 1 
**Done by Salwan Aldhahab**

 ## **What did you work on since the last standup?**

I worked on enhancing the frontend/yuplanner project by adding a signup page, creating new components for signup and login functionality, and updating existing components to integrate these features. This includes the Signup component, SignupTextField, CreateAccountButton, and LoginSignUpButtons. I also made some refactoring updates, like renaming TextField to LoginTextField for clarity and removing an unused logo import in App.js.

## **What do you commit to next?**

I commit to further testing and refining the signup process as I still need to connect it to the databases (frontend)

## **When do you think you'll be done?**

I will be done by the end of sprint 1

## **Do you have any blockers?**

There are no blockers at the moment


# 18 Nov 2024 - Sprint 1 Standup 2
**Done by Anusha Mansoor**

## **What did you work on since the last standup?**

I worked on creating/organizing the backend/yuplanner of the project. I created a database called yuplanner and in this database there was 4 tables. 3 of the tables was used to store information about the different types of users, these tables were names student, professor, and advisor. The 4th table was called courses and it was used to store all of the courses the app offers and course information. This portion of the app stores all of the database's information needed for the backend.

## **What do you commit to next?**

The next commit will include adding more data to the databases, connecting to the front end, and refining the connection between the front end and backend.

## **When do you think you'll be done?**

I will be done by the end of sprint 1

## **Do you have any blockers?**

There are no blockers at the moment

# 18 Nov 2024 - Sprint 1 Standup 3

**Done by Salwan Aldhahab**

## **What did you work on since the last standup?**

I updated the frontend dependencies, specifically adding @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, and react-router-dom to the package.json. I also implemented routing using react-router-dom in App.js for Login and Signup pages. Additionally, I created the AppBar component using Material-UI, and developed the LoginTextField, SignupTextField, LoginSignUpButtons, and CreateAccountButton components. I also styled and set up the Login and Signup pages with Material-UI components.

## **What do you commit to next?**

I plan to enhance the styling of the AppBar and refine the UI of the Login and Signup pages to improve user experience. I’ll also add form validation to the LoginTextField and SignupTextField components and integrate any backend API calls necessary for the authentication flow.

## **When do you think you'll be done?**

I aim to complete these tasks by the next standup.

## **Do you have any blockers?**

Currently, there are no blockers. However, I may need additional input on the preferred validation rules for the signup form and backend API endpoints for authentication.


# Nov 20, 2024 - Sprint 1 Standup 4
**Done by Anagha Koroth**

## **What did you work on since the last standup?**

I designed and implemented a sidebar navigation system for the YUPlanner website, providing students with easy access to the planner’s services after logging in. The sidebar includes links to "Search Courses," "Drop Courses," "Your Progress," and "View Full Schedule." To enhance user experience, I added a hover effect that bolds the links, allowing students to easily identify the link they are selecting. Additionally, I integrated a Student Profile section in the sidebar, which has an avatar, the student's name, student number, and a button for accessing their personal profile. At the bottom, I included a Sign Out button to allow students to log out of YUPlanner. This feature was built using React Router for navigation and MUI components (from @mui/material) for buttons and styling, ensuring a neat and easy design.

## **What do you commit to next?**

I will ensure that the links to “View Profile” and “Sign Out” buttons will lead to their respective pages. Additionally, I will align the student’s avatar, name, and student number neatly to maintain a clean and organized layout.

## **When do you think you’ll be done? **

These updates will be completed by Sprint 2.

## **Do you have any blockers?**

There are no blockers for this standup. 


# Nov 20, 2024 - Sprint 1 Standup 5
**Done by Anagha Koroth**

## **What did you work on since the last standup?**

I implemented a “Search Courses” page that is accessible from the sidebar link. The link will direct the student to a page where they can search their courses. It includes two drop down menus which narrow the list of courses by session and department, making it a more focused search. The search bar further filters through the courses based on the department selected, making the feature efficient and user-friendly. I implemented this using @mui/material for the dropdowns, search bar, and list of courses, ensuring a clean design.

## **What do you commit to next?**

I plan to add more information to guide users on how to use the drop down and search bar to search courses. I will also adjust the layout, making the features larger to reduce the excess white page on the screen. My next task will be to create links for the courses, allowing students to learn more information about the course.

## **When do you think you’ll be done?**

I aim to complete this by Sprint 2.

## **Do you have any blockers?**

There are no blockers for the layout of the search courses features. However, the frontend will need to be updated to implement the backend databases for the list of courses, before I can start creating links to the courses.


# 20 Nov 2024 - Sprint 1 Standup 6 
**Done By Areeba Ansari**

## **What did you work on since the last standup?**

Since the last standup, I worked on building on the previous work by adding the ‘DropCourse.js’ and ‘DropCourse.css’ files which implement the drop courses feature. I styled the drop courses page to ensure it aligns with the overall design of the app and connected it to the Signup page using the appropriate link. This completes the integration of the drop courses feature into the user flow.

## **What do you commit to next?**

I plan to add a new link on the Signup page that redirects users to a dedicated Add Courses feature. This will involve designing the UI for the link and the Add Courses interface, ensuring it aligns with the overall styling of the app. I will also connect the feature to the backend API to enable functionality for fetching available courses and saving user-selected courses during the signup process.

## **When do you think you'll be done?**

I will be done by the beginning of sprint 2.

## **Do you have any blockers?**

During this standup, the only blocker was being able to connect the ‘DropCourses.js’ to the ‘Drop Courses’ link on the sidebar. Therefore, we added this to ‘bug fixes’ and a team member was able to resolve the issue.


# Nov 21, 2024 - Sprint 1 Standup 7 
**Done By Mavra Muzmmal**

## **What did you work on since the last standup?**

I worked on the professor's page for the YUPlanner project. Specifically, I edited the existing sidebar navigation to include relevant links tailored for professors. The updated sidebar now includes links to "Manage Courses" and "Reviews." I also adjusted the styling to match the professor’s theme and user flow. Additionally, I optimized the layout to ensure it is responsive across different screen sizes. This was done using React Router for navigation and MUI components for styling consistency. 

## **What do you commit to next?** 

Next, I will ensure the "Reviews" and "Manage Courses" links are functional and lead to placeholder pages that we can enhance in the next sprint. I will also add tooltips to the sidebar links to improve accessibility and user guidance. 
## **When do you think you’ll be done?**

 I plan to finish these tasks in Sprint 2. 

## **Do you have any blockers?**

Currently, there are no blockers, but I may need to discuss the exact features required on the placeholder pages with the team to avoid misalignment.


## Nov 21, 2024 - Sprint 1 Standup 8
**Done By Anusha Mansoor**

## **What did you work on since the last standup?**

I worked on connecting the database to the login page and the sign up page. I was able to get the sign up page to add new students and professors to the database. For the login page I was able to get students to sign in.

## **What do you commit to next?**

Next, I will ensure the database is connected to the rest of the profiles (professor and advisor) to the login and sign up page and I also plan on connecting the courses database to the rest of the features in the app.

## **When do you think you’ll be done?**

I plan to finish these tasks in Sprint 2.

## **Do you have any blockers?**

Currently, there are some blockers I faced are not being able to connect the professor database to the login page.
