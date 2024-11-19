# ReGISTRATION
Here’s a sample **README.md** file for your **Registration CRUD** project that you can use for your GitHub repository:

---

```markdown
# Registration CRUD

A simple web application to manage registration data (Create, Read, Update, Delete) using a **Node.js** backend and a **frontend** with HTML, CSS, and JavaScript. This project allows users to submit their registration details, which are stored in a MySQL database. The registered users can be viewed and managed via the frontend interface.

---

## Features

- **Create**: Add new user registration.
- **Read**: View all registered users.
- **Update**: Edit user information (you can implement this functionality if needed).
- **Delete**: Delete a user registration (you can implement this functionality if needed).

---

## Project Structure

```
registration-crud/
├── backend/                     # Backend server and routes
│   ├── app.js                   # Main backend application file
│   ├── db/
│   │   └── connection.js        # Database connection setup
│   └── routes/
│       └── registration.js      # Routes for handling user registration
├── frontend/                    # Frontend files
│   ├── index.html               # HTML file for registration form and display
│   ├── style.css                # Basic CSS for styling
│   ├── script.js                # JavaScript to handle frontend logic
├── package.json                 # Project dependencies and scripts
├── README.md                    # Project documentation (this file)
```

---

## Installation

To run the project locally, follow these steps:

### **1. Clone the Repository**

Clone the project to your local machine using Git:

```bash
git clone https://github.com/yourusername/registration-crud.git
```

### **2. Install Backend Dependencies**

Navigate to the `backend` folder and install the necessary dependencies:

```bash
cd registration-crud/backend
npm install
```

### **3. Set Up Database**

- Ensure you have **MySQL** installed and running on your local machine.
- Create a new database called `registration_db`.

Run the following SQL commands in your MySQL client to set up the database:

```sql
CREATE DATABASE registration_db;
USE registration_db;

CREATE TABLE Registration (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    DateOfBirth DATE,
    Phone VARCHAR(15)
);
```

### **4. Start the Backend Server**

From the **backend** folder, start the backend server with the following command:

```bash
npx nodemon app.js
```

The server will run at `http://localhost:3000`.

---

## Frontend Setup

### **1. Open Frontend in Browser**

- Navigate to the `frontend` folder.
- Open the **`index.html`** file in any browser, or use **VS Code Live Server** extension to open it in Chrome.

### **2. Use the Registration Form**

- Use the form in the frontend to submit registration details (name, email, date of birth, phone number).
- The form data will be sent to the backend and stored in the MySQL database.

---

## Usage

- **Add a new registration**: Fill out the form on the webpage and submit the details. The new user will be added to the database and displayed in the list.
- **View registered users**: All users in the database will be displayed on the webpage.

---

## Future Enhancements

- **Update**: Add functionality to update user details.
- **Delete**: Add functionality to delete a user registration.
- **Validation**: Implement proper form validation on both the frontend and backend to ensure correct data input.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, MySQL
- **Development Tools**: VS Code, npm, Nodemon

---

