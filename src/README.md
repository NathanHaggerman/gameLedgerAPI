# Game Ledger API

The Game Ledger API is a backend application that provides endpoints to manage users and their video game records. It is built with Node.js, Express.js, and MySQL.

## Getting Started

To run the API server locally, follow these steps:

1.  Clone this repository to your local machine.

2.  Install the required dependencies:

        npm install

3.  Set up the MySQL database and configure the connection details in db.js.

4.  Create the necessary database tables using the provided SQL statements in db.sql.

5.  Start the API server:

            npm start

    The API server will run on http://localhost:3000.

API Endpoints

- GET /users: Get a list of all users.
- GET /users/:id: Get details of a specific user by ID.
- POST /users: Create a new user.
- PUT /users/:id: Update an existing user by ID.
- DELETE /users/:id: Delete a user by ID.
  Additional endpoints for managing video games and user-game relationships.

## Technologies Used

- Node.js
- Express.js
- MySQL

## Contributing

Contributions to the Game Ledger API are welcome. To contribute, fork the repository, make changes, and submit a pull request.
