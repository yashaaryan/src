Task Manager API
The Task Manager API is a RESTful API built with Node.js and Express.js that allows users to manage tasks. It provides endpoints to perform CRUD operations (Create, Read, Update, Delete) on tasks, including features like title, description, completion status, date due, and priority.

Prerequisites
Before running the Task Manager API, ensure that you have the following installed:

Node.js: Download and Install Node.js

Follow the steps below to set up and run the Task Manager API:

Clone the repository
git clone https://github.com/yashaaryan/src
Navigate to the project directory:
Install the dependencies
Start the server
The server will start running on http://localhost:3000.

API Endpoints
The Task Manager API provides the following endpoints:

GET /tasks: Retrieve all tasks.
GET /priorityTasks: Retrive all tasks in order of the priority 
GET /tasks/:id: Retrieve a task by its ID.
POST /tasks: Create a new task.
PUT /tasks/:id: Update a task by its ID.
DELETE /tasks/:id: Delete a task by its ID.
For detailed information about the request and response format for each endpoint, refer to the code implementation and comments in the index.js file.

Request and Response Format
The Task Manager API expects and returns JSON data. Here's an example of a task object:


{
  "id": 1,
  "title": "Task Title",
  "description": "Task Description",
  "completed": false,
  "dateDue": "2023-06-30",
  "priority": "high"
}
Error Handling
The API includes error handling for invalid requests. In case of errors, appropriate status codes and error messages will be returned in the response.

Contributing
Contributions to the Task Manager API are welcome! If you find any issues or want to suggest improvements, please create a pull request or submit an issue in the repository.


Acknowledgments
The Task Manager API was developed as part of a project and is based on the concepts learned during the Node.js and Express.js course.

Feel free to customize this README file based on your specific project requirements, including any additional sections or details that you deem necessary.