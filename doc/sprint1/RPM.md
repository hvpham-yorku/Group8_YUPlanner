


# Release Planning Meeting (RPM.md)

## Release Goal 
The main purpose of this YU planner is to have everything on one page. If any student wants to make a schedule, check the prerequisites, or add/drop courses, they have one platform for all of these. Moreover, if a student wants to check the professor's ratings, he can also do that through the YU planner. If the student wants academic advising, he can do that through this app.

## Scope
### Key Features: 
Login Page, Search Bar, Student Profile, Advisor Profile and Professor’s Profile. 

## 1. Student Profile (Features):

1. ** View Course List **
Description: Implement a module for students to check the course list. Students can also search the courses by using the course name or code. 
Associated with User Story #1 and #8
2. ** Course Prerequisites and Course Description **
   - Description: Implementing a module for students to check course prerequisites. And read the course description.
   - Associated User Stories: #2 and #10. 
3. ** Add / Drop Course **
Description: Add functionality for students to switch the sections and can easily add or drop the courses.
Associated User Stories:  #3 and #6

4. ** Timetable Planner **
Description: This tool enables students to create and manage their semester schedules and download them.
Associated User Stories: #4, #7 and #17.

## 2. Professor’s Profile 
Description: Professors can make their profiles and can edit their profiles. The professor can see the student's ratings. Professors can also update the courses information.If the professor has any research program he can post about it on his profile. Students can see the professor’s profile and the rating. Also, students can write down the review about the professor and rate them according to their experience. 
Associated User Stories: #5, #12 and #19.

## 3. Advisor’s Profile 
Description: The Advisor can see the student's schedule and can view their degree progress reports. Advisors can search for the courses.
Associated User Stories: #18.

## Non-Functional Requirements
- **Performance**: The system is under testing and can handle 5 - 10 users.
- **Technology Stack**: SpringBoot for Java and MySQL database for backend and  React frontend. 
- **Dependencies**:
- Frontend: React framework for UI 
- Backend:  MySQL database for storing data, Java Springboot is a tool which connects database and React. 

## Participants
- Areeba Ansari
- Anusha Mansoor 
- Anagha Koroth
- Mavra Muzmmal
- Salwan Aldhahab

## Timeline
- Project Duration: 4 weeks
  - Sprint 1: Nov 5 - Nov 19
  - Sprint 2: Nov 20 - Dec 3

##References to User Stories

#### User Story #1: Viewing Course List
A student can View the list of courses they can take - for each semester → choose electives/required courses and plan out schedules.
 The course list should display course codes, names, and brief descriptions.
 The list should be searchable → should also be able to choose courses by department, year and if they’re full/empty

#### User Story #2: Check Prerequisites
Student
Check requirements for a specific course to ensure eligibility
Prerequisites should appear on the course information page.
Prerequisites should be explicitly labelled with prerequisite courses or grades.


#### User Story #3: Add - or - Drop Course
Students can add/drop courses from their schedules.
Students may easily add and drop courses from the course list.
Students may easily add or drop classes with a single click.

#### User Story #4: View Class Sections
Students can explore available sections for engineering and non-engineering courses and select the one that best matches their schedule.
Ensure all parts provide information on timing, location, and availability.
Sections should be arranged by course to facilitate navigation.

#### User Story #5: Check Professor Details
Student.
You may view professor information for each course segment and select a professor that suits your learning style.
Professor data should include name, department, and any applicable ratings or reviews.
Students should be able to access professor information in section details.

#### User Story #6: Move Course Section
Student.
Modify course sections → settle scheduling conflicts.
Students can see other sections that have seats available.

#### User Story #7: View Full Schedule
Student.
You may examine the semester schedule (fall/winter/summer) to prevent any occurring semester conflicts.
The timetable should be displayed as a calendar view.
Course updates should be updated in real-time.

#### User Story #you 8: Search Courses
Students may search for certain courses automatically.
The search bar can be filtered by course code, name, and department.
Search results are accurate within seconds.

#### User Story #9: Filter Courses
To restrict selections, students can filter courses by characteristics such as level or department.
Filters are provided on the course list page.
Filtering refreshes results automatically.
A student can filter the courses with the professor so they can find the classes with a specific professor.

#### User Story #10: View Course Descriptions
Student.
Read a course description to gain an overview of course content, expectations, and more.
Clear descriptions are provided for each course.

#### User Story #11: Course Reviews
Students can learn about other students' opinions by researching course reviews.
Course reviews are found on the course detail page.
Each review includes ratings and brief remarks.

#### User Story #12 Professor's Rating
Students.
Students can rate the professors according to their experiences.
Students can read the other students' reviews as well about the professor.

#### User Story #13: Check Enrollment Status
Student
Students can check course availability based on enrollment status.
Course sections show "Full" "Seats Available," or "Waitlist" status.
Automatically refreshes the status when seats fill.

#### User Story #14: Receive Prerequisite Warnings
Student.
Receive alerts if I enroll in a course without satisfying the prerequisites, preventing enrollment conflicts.
Warning notifications emerge throughout enrollment attempts.
Links to necessary courses are given.

#### User Story #15: View Graduation Requirements
Student.
View the remaining prerequisites for graduation and adjust your course schedule appropriately.
You may find the graduation requirements in the planner.
As courses are finished, requirements are updated dynamically.

#### User Story #16 Academic Progress Tracker
Student
Students can view their academic progress
Students can plan their degree according to their progress
The tracker will automatically update as the student completes any course

#### User Story #17: Download Schedule
Students can download their final timetable and store it for future reference.
Download choices include PDF and calendar formats.
The downloadable schedule includes all recent revisions.

#### User Story #18: Academic Advisor View
As an academic adviser, I can better guide students by reviewing their calendars.
Advisors can view student schedules and registered courses.
Advisors can filter based on department, course load, and prerequisites.

#### User Story #19: Professor's Profile
Professors can make their profile
professors can edit their profiles
Students can view the professor’s profile
If the professor has any research program he can post about his research  and encourage the students to join him

#### User Story #20: Update Courses Information
Professors can Update course details to ensure accurate and up-to-date information during enrollment.
Professors can change course descriptions and contact information.
Students receive real-time updates.


