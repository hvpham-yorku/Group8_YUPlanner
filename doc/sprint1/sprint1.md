
# Sprint 1 Planning Meeting (sprint1.md)

## Sprint Goal
Implement the foundational features for the YU Planner, focusing on the course management functionality and enabling the students to view, search and interact with the courses more effectively. The sprint will set the stage for future sprints by completing the backend functionalities and some basic front-end functionalities.

## User Stories for Sprint 1
**1. User Story# 1: Login Page**
As a student, I want to login into the application using my credentials, so that I can access my dashboard. 

 **Criteria of satisfaction** :
- User can log in using their username and password.
- Display an error message for invalid credentials.

**2.  User Story #2: Signup Page**
As a new user, I want to create an account so that I can access the YU planner.

 **Criteria of satisfaction** :
- Users can register by providing their First and Last names. 
- Users can select the account type.
- User can create their email and password. 

**3. User Story#3: Student Profile**
As a student, I want to view and update my student profile information, so that I can make sure my details are correct. 

 **Criteria of satisfaction** :
- Display user details, including name, email and enrolled courses.
- Allow students to edit their profile information.
- Changes should reflect immediately after saving. 

**4. User Story# 4: Viewing Course List**:
As a student, I want to view the list of the courses, so I can select the required courses or electives and plan my schedule.

**Criteria of satisfaction** :
   - Display the course name, codes and brief description.
   - Enable the search option, so students can search about the course by name or code.

**5. User Story #5: Drop Courses:**
As a student, I want to drop the course from my schedule to adjust my academic plan.

**Criteria of satisfaction:** 
- Drop courses with a single click.
- Real-time updates of course status after changes. 

 **6. User Story #6: Search Courses**
As a student, I want to search for specific courses to quickly find what I need.

**Criteria of satisfaction:**
- Search bar with which users can easily search the course with name or code. 
- Display the accurate results within seconds

**7. User Story #7: Professor’s Profile**
As a professor, I want to create and edit my profile, so that students can see my details and any research programs.

**Criteria of satisfaction:**
- Allow professors to add and update their profiles.
- Display profiles to students, including research programs and reviews.

## Spikes
- **Spike 1**:  Search on secure login implementation
- **Spike 2**:  Research on Database design for profiles and courses
- **Spike 3**: Exploring React libraries 
- **Spike 4**: Integrating Backend with Frontend
- **Spike 5**: Setting up the Trello board

## Team Capacity:
- Areeba Ansari (React 5hours)
- Anusha Mansoor( MySQL and Java Springboot 8 hours)
- Anagha Koroth ( React 5 hours)
- Mavra Muzmmal ( React 5hours)
- Salwan Aldhahab( React and Java Springboot 8 hours)


## Task Breakdown:

#### ** 1. Login and Signup Page done by Salwan Aldahab**
**Goal**: 
- Implement a secure login and signup system so that users can access their dashboards.
- Develop front-end components for the login page
- Develop front-end components for the signup page.

#### **2. Profiles Tasks**
**Goal**:  Create a Login Page and profiles for Students, Professors and Advisors each with specific functionalities.

## 1. Student’s Profile  done by: Areeba Ansari and Anagha Koroth
- View Course List 
- Drop Course
- Search Courses
## 2. Professor’s Profile done by: Mavra Muzmmal
- Manage course
- Student Review

#### ** 3. Database done by Anusha Mansoor **
**Goal**: Design and execute a database for courses which are accessible to Students and Professors with defined functionalities.
- Design a database scheme to store the credentials
- Validate the username and password
- Design a database scheme to register new users
- Design database scheme for student profile
- Design database scheme for professor profile.

## Participants
- Areeba Ansari  ( React )
- Anusha Mansoor ( MySQL, JavaSpringboot)
- Anagha Koroth ( React)
- Mavra Muzmmal ( React)
- Salwan Aldhahab ( React, Java Springboot)

## Decisions Made
**Database Design:**
- We decided to use MySQL for our database management system. We chose MySQL because it is very reliable, widely used and integrates seamlessly with Java Springboot.  
**Backend and Frontend Stack:**
- Backend: Java Springboot, RESTful APIs for handling.
- Frontend: React provides a dynamic and user-friendly interface. 
**Prioritization:**
- Focus on executing the Profiles Database and basic Course management APIs to establish the core first.
**Version Control and Collaboration:**
- Using GitHub for source control with separate branches for each task.
- Follow a pull request for the workflow to ensure the quality and track the progress.
- Using Discord for communications.
- Using Trello for tracking everything. 
