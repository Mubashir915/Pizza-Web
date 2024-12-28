import mysql from 'mysql2';

// MySQL connection configuration
const db = mysql.createConnection({
    host: '127.0.0.1',  // Aap apne MySQL server ka host address yahan daalain
    user: 'root',       // Aap apna MySQL username yahan daalain
    password: 'localhost@911',  // Aap apne MySQL password yahan daalain
    database: 'pizza_db'  // Aap apne database ka naam yahan daalain
});

// Checking if connection is successful
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

export default db;
