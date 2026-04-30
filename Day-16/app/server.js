const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('🚀 Node + MySQL API Running');
});

// Create table
app.get('/init', (req, res) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255)
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    res.send('✅ Table created');
  });
});

// Insert data
app.post('/add', (req, res) => {
  const { name } = req.body;
  const sql = 'INSERT INTO users (name) VALUES (?)';

  db.query(sql, [name], (err) => {
    if (err) throw err;
    res.send('✅ User added');
  });
});

// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});
