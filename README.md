# NoSQL: Social Network API

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)

## Description

This project is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM to manage data.

## Installation

1. Clone this repository to your local machine.
2. Make sure you have MongoDB installed. 
3. Install the project's dependencies by running the following command:

## Usage

1. Start the server using the following command: npm run install

2. Open your preferred API testing tool (e.g., Insomnia or Postman).

3. Test the API routes as described in the [API Routes](#api-routes) section.

## API Routes

The API provides the following routes:

- `/api/users`
- `GET`: Get all users
- `GET /:id`: Get a single user by their ID with thoughts and friend data
- `POST`: Create a new user
- `PUT /:id`: Update a user by their ID
- `DELETE /:id`: Delete a user by their ID

- `/api/users/:userId/friends/:friendId`
- `POST`: Add a friend to a user's friend list
- `DELETE`: Remove a friend from a user's friend list

- `/api/thoughts`
- `GET`: Get all thoughts
- `GET /:id`: Get a single thought by its ID
- `POST`: Create a new thought
- `PUT /:id`: Update a thought by its ID
- `DELETE /:id`: Delete a thought by its ID

- `/api/thoughts/:thoughtId/reactions`
- `POST`: Create a reaction for a thought
- `DELETE`: Delete a reaction from a thought by its ID

## Walkthrough Video



## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## License

This project is licensed under the [MIT License](LICENSE).


