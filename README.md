# YUPlanner (Group_8)

## Table of Contents
- [Motivation](#motivation)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
- [Contribution](#contribution)

## Motivation

YUPlanner is a comprehensive application that is being designed to make academic planning easier for students at York University. It integrates registration, requirement visualization, and course scheduling into a single, seamless user experience. By providing York University students with a full semester management tool, the platform seeks to enhance their academic experience and planning utility. In addition to providing professor information, GPA criteria, and course choices, the program speeds up enrollment procedures.

## Installation

### Backend

We are using Java Spring Boot for the backend and MySQL for the database.

1. Download MySQL version 8.0.40 from [here](https://dev.mysql.com/downloads/mysql/).
2. We are using Java 17 and Spring Boot 3.3.5 with dependencies Spring Web, MySQL Driver, and Spring Data JPA.

### Frontend

We are using ReactJS for the frontend.

1. Download Node.js version 22.11.0 LTS with npm version 10.9.0.
   - For Windows installation of Node.js and npm, use Chocolatey:
     - Download Chocolatey using PowerShell and follow the instructions on this [page](https://chocolatey.org/install?_gl=1*6yf9ce*_ga*MTM2NTkyODU4Ni4xNzMwOTE4OTI1*_ga_0WDD29GGN2*MTczMDkyNDgzMy4yLjEuMTczMDkyNDg5OS4wLjAuMA).
     - Use the commands:
       ```sh
       choco install nodejs-lts --version="22.11.0"
       node -v
       npm -v
       ```
   - For MacOS and Linux:
     - Install nvm (Node Version Manager):
       ```sh
       curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
       ```
     - Download and install Node.js (you may need to restart the terminal):
       ```sh
       nvm install 22
       ```
     - Verify the right Node.js version is in the environment:
       ```sh
       node -v # should print `v22.11.0`
       ```
     - Verify the right npm version is in the environment:
       ```sh
       npm -v # should print `10.9.0`
       ```

## Usage
We recommend using IntelliJ for the backend development and VS Code for the frontend development. 

To clone the repository, run the following command in your terminal:

```sh
git clone https://github.com/hvpham-yorku/project-group_8.git
```

### Backend

1. Navigate to the backend directory:
    ```sh
    cd doc/sprint0/setup/backend/yuplanner
    ```
2. Currently, when running the backend, you need to change the credentials to grant the server access to your database in the `application.properties` file:
    ```properties
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    ```
3. Start the backend server:
    ```sh
    mvn spring-boot:run
    ```

4. The backend will run on [http://localhost:8081](http://localhost:8080)

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd doc/sprint0/setup/frontend/yuplanner
    ```
2. Start the frontend development server:
    ```sh
    npm start
    ```
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contribution

Please follow the guidelines below to contribute to the project:

- **Git Flow**: We use the Git Flow branching model. Please create feature branches from the `main` branch and name them using the format `feature/your-feature-name`.
- **Branch Naming**: Use descriptive names for your branches, such as `feature/add-login` or `bugfix/fix-schedule-bug`.
- **Issues**: We use GitHub issues to track bugs and feature requests. Please check existing issues before creating a new one.
- **Pull Requests**: Submit pull requests to the `main` branch. Ensure your code is well-documented and includes tests. All pull requests will be reviewed by a team member before being merged.
