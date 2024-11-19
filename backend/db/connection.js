const mysql = require('mysql2');

// Database configuration
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'yourpassword', // Replace with your MySQL password
    database: 'registration_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Promisify the pool for async/await use
const promisePool = pool.promise();

module.exports = promisePool;
