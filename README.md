# Bank Management System

## Overview

The **Bank Management System** is a web-based application designed to manage banking operations like account creation, profile management, and handling transactions. This project includes both frontend and backend components:

- **Frontend**: A React.js application providing a user interface for interacting with the bank system.
- **Backend**: A Spring Boot application serving as the REST API for the system, handling requests such as account creation, account details retrieval, and more.

## Features

### Backend:
- Account creation and management.
- Handling of account-related queries.
- RESTful API for frontend interaction.

### Frontend:
- User interface for creating and managing bank accounts.
- Displaying credit card details.
- Searching and displaying account information based on account number.
- Form for updating account details.

## Technologies Used

### Backend:
- **Java** (Spring Boot) for building the REST API.
- **MySQL** for database management.

### Frontend:
- **React.js** for building the user interface.
- **Axios** for making API requests.
- **Bootstrap** for styling and layout.

## Installation

### Prerequisites:
- **Java** (version 8 or above) for running the backend.
- **Node.js** and **npm** for running the frontend.
- **MySQL** for the database.

### Backend Setup (Spring Boot):

1. Clone the repository:
   ```bash
   git clone https://github.com/gabbrenn/bank-management-system.git
   cd bank-management-system
2. Navigate to the bankmanagement-back directory
   ```bash
   cd bankmanagement-back
3. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
4. The backend will be accessible at
   ```bash
   http://localhost:8080

### Frontend Setup (React.js):

1. Navigate to the bankmanagement-front directory:
   ```bash
   cd bankmanagement-front
2. Install dependencies:
   ```bash
   npm install
3. Run the React application:
   ```bash
   npm start
4. The frontend will be accessible at
   ```bash
   http://localhost:3000

### Usage
- **Account Search:** Use the search bar to find accounts by account number.
- **Account Details:**  Displays details such as account number, type, and balance.
- **Credit Card Display:** Show a simulated credit card with placeholders for account-related details.
- **Account Update:** Allows users to change their account PIN.
- 

### Folder Structure:

1. 
   ```perl
   bank-management-system/
   ├── bankmanagement-back/           # Backend (Spring Boot)
   │   ├── src/                      # Java source files
   │   ├── resources/                 # Application resources (e.g., application.properties)
   │   └── pom.xml                    # Maven build configuration
   ├── bankmanagement-front/          # Frontend (React.js)
   │   ├── public/                    # Public assets
   │   ├── src/                       # React components and assets
   │   └── package.json               # Node.js dependencies and scripts
   └── README.md                      # Project documentation


### Contributing:
Feel free to fork this repository and make contributions! To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add feature').
4. Push to the branch (git push origin feature-name).
5. Create a pull request.

### License:
This project is open-source and available under the [MIT License](./LICENSE) .

### Key Sections to Modify
- **Repository Link**: Replace `https://github.com/gabbrenn/bank-management-system.git` with your actual GitHub repository link.
- **Contributing**: This section gives basic instructions for contributing to the project.
- **Folder Structure**: Modify if necessary to reflect the actual structure of your project.

Once you’ve customized this `README.md`, place it in the root directory of your repository.
