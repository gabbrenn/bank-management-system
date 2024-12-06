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
   
