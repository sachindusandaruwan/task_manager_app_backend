# Task Manager Backend 🚀

**Task Manager server** Task Manager Server is the backend API for the Task Manager application. It provides endpoints for managing user tasks, authentication, and task-related operations. The server is designed for scalability, security, and ease of integration with the frontend application.

## Features 🔧

- **User Authentication**: Secure login and registration system using JWT.
- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Task Management**: Organize and manage tasks with titles, descriptions, and statuses.
- **Search Tasks**:  Search through tasks by keywords or status.
- **User-specific Data**: Each user can only access their tasks.



## Technologies Used 🛠

- **Node.js**: JavaScript runtime environment for building scalable server-side applications.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing user data and notes.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
- **Bcrypt.js**: Used to hash and secure passwords.

## Getting Started ⚡

Follow these steps to set up the **Task Manager Backend* locally:

### 1. Clone the repository:

```bash
git clone https://github.com/sachindusandaruwan/task_manager_app_backend.git
```

### 2. Install dependencies:

Navigate into the project directory and install the required dependencies:

```bash
cd task_manager_app_backend
npm install
```

### 3. Configure Environment Variables:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

- **MONGO_URI**: Your MongoDB database connection string.
- **JWT_SECRET**: A secret key used to sign and verify JWT tokens.
- **PORT**: The port on which the server will run.

### 4. Start the server:

Run the following command to start the server:

```bash
npm start
```

## License 📜

This project is licensed under the MIT License - 
