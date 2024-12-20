# Todo Backend

This repository contains the backend code for the Todo List application, built with **Express.js**, **Prisma**, **MySQL**, and **TypeScript**. The backend provides RESTful API endpoints to manage tasks, including creating, editing, completing, and deleting tasks.

## Features

- **Create Tasks**: Add new tasks with a title and color.
- **Edit Tasks**: Update task details like title, color, and completion status.
- **List Tasks**: Retrieve all tasks from the database.
- **Delete Tasks**: Remove tasks permanently.
- **Prisma ORM**: Efficient database management and querying.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16+)
- [MySQL](https://www.mysql.com/) database instance

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="mysql://<user>:<password>@<host>:<port>/<database_name>"
   PORT=4000
   ```

4. Initialize Prisma:
   ```bash
   npx prisma generate
   ```

5. Migrate the database:
   ```bash
   npx prisma migrate dev --name init
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

The backend should now be running on `http://localhost:4000`.

---

## API Endpoints

### Base URL

```
http://localhost:4000
```

### Endpoints

#### **GET /tasks**
Retrieve all tasks.

**Response**:
```json
[
  {
    "id": 1,
    "title": "Sample Task",
    "color": "red",
    "completed": false,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

#### **POST /tasks**
Create a new task.

**Request Body**:
```json
{
  "title": "New Task",
  "color": "blue"
}
```

**Response**:
```json
{
  "id": 2,
  "title": "New Task",
  "color": "blue",
  "completed": false,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### **PUT /tasks/:id**
Update a task by ID.

**Request Body**:
```json
{
  "title": "Updated Task",
  "color": "green",
  "completed": true
}
```

**Response**:
```json
{
  "id": 2,
  "title": "Updated Task",
  "color": "green",
  "completed": true,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-02T00:00:00.000Z"
}
```

#### **DELETE /tasks/:id**
Delete a task by ID.

**Response**:
```json
{
  "message": "Task deleted successfully."
}
```

---

## Project Structure

```plaintext
src/
├── prisma/              # Prisma configuration and schema
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Optional: Seed data script
├── routes/              # API route handlers
│   └── tasks.ts         # Task-related routes
├── middlewares/         # Custom middlewares
├── utils/               # Utility functions
├── app.ts               # Express app configuration
├── server.ts            # Main entry point
```

---

## Scripts

- **`npm run dev`**: Start the server in development mode.
- **`npm run build`**: Compile TypeScript files.
- **`npm start`**: Start the compiled server.
- **`npx prisma migrate dev`**: Apply migrations.
- **`npx prisma generate`**: Generate Prisma client.
- **`npx prisma studio`**: Access the Prisma Studio GUI.

---


