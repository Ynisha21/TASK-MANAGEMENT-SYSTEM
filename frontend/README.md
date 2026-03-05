# Task Management System

## Project Overview
The Task Management System is a web application that helps users organize and manage their daily tasks efficiently. Users can create tasks, update them, track their progress, and manage deadlines.

This project is developed using the MERN stack concepts taught during lab sessions. The application provides a simple and responsive interface for managing tasks with different priorities, categories, and statuses.

---

## Features

### 1. Task Management (CRUD Operations)
The application allows users to perform full CRUD operations on tasks.

- Create a new task with title, description, category, priority, and due date.
- View all tasks in a structured card layout.
- Update task details when required.
- Delete tasks that are no longer needed.

These operations are handled using REST APIs connected with the MongoDB database.

---

### 2. Search Functionality
Users can search tasks using keywords. The search works by matching the entered text with the task title or description.

This is implemented using MongoDB text indexing and query filtering so that relevant tasks are displayed quickly.

---

### 3. Filtering Tasks
Users can filter tasks based on:

- Category (Work, Personal, Study)
- Priority (Low, Medium, High)
- Status (Pending, In Progress, Completed)

Filtering helps users easily find tasks based on their requirements.

---

### 4. Deadline Based Sorting
Tasks can be sorted based on due dates:

- **Nearest Deadline** → Tasks with the closest due date appear first.
- **Farthest Deadline** → Tasks with later deadlines appear later.

This helps users focus on urgent tasks.

---

### 5. Priority Management
Each task has a priority level:

- Low
- Medium
- High

This allows users to identify important tasks quickly.

---

### 6. Responsive UI
The user interface is responsive and works on both desktop and mobile devices.

The project uses React with modern UI styling to provide a clean and simple layout.

---

### 7. Task Statistics

The dashboard also shows task statistics:

    -Total Tasks
    -Completed Tasks
    -Pending Tasks
    -In Progress Tasks

## Technologies Used

### Frontend
-React.js
-Vite
-React Router
-Axios
-Tailwind CSS
-DaisyUI
-React Hot Toast
-Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure
TASK-MANAGEMENT-SYSTEM
│
├── backend
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   │
│   │   ├── controllers
│   │   │   └── taskController.js
│   │   │
│   │   ├── models
│   │   │   └── taskModel.js
│   │   │
│   │   ├── routes
│   │   │   └── taskRoutes.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── node_modules
│   ├── public
│   │
│   ├── src
│   │   ├── assets
│   │   │   └── react.svg
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskFilters.jsx
│   │   │   ├── TaskNotFound.jsx
│   │   │   └── TaskStats.jsx
│   │   │
│   │   ├── lib
│   │   │   └── axios.js
│   │   │
│   │   ├── pages
│   │   │   ├── CreateTaskPage.jsx
│   │   │   ├── EditTaskPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── TaskDetailPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── .gitignore
├── eslint.config.js
├── package.json
└── README.md


---

## Installation and Setup

### 1. Clone the Repository
git clone <repository-link>


### 2. Install Backend Dependencies
cd backend
npm install


### 3. Install Frontend Dependencies
cd frontend
npm install

### 4.Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=3000

### 5. Run Backend Server
npm run dev


### 6. Run Frontend Application
npm run dev


The application will start on the local development server.

---

## Future Improvements

- User authentication system
- Multi-user task management
- Task reminders and notifications
- Drag and drop task management
- Dashboard analytics for task tracking

---

## Conclusion
This project demonstrates the implementation of core MERN stack concepts including CRUD operations, filtering, searching, and deadline-based sorting. The system helps users manage tasks efficiently with an organized and responsive interface.

## Author

Name: Nisha Yadav
Course: BSc Computer Science
Project: MERN Task Management System