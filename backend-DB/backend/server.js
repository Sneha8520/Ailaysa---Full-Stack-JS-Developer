// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sneha8520',
  database: 'squarebox_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Get all squares
app.get('/api/boxes', (req, res) => {
  db.query('SELECT * FROM squares', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Add a square
app.post('/api/boxes', (req, res) => {
  const { title } = req.body;
  db.query(
    'INSERT INTO squares (title) VALUES (?)',
    [title],
    (err, result) => {
      if (err) throw err;
      res.send({ id: result.insertId, title });
    }
  );
});

// Delete a square
app.delete('/api/boxes/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM squares WHERE id = ?';
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to delete square' }); // Return JSON
      } else {
        res.status(200).json({ message: 'Square deleted successfully' }); // Return JSON
      }
    });
  });
  
  

  

// Get a square by ID
app.get('/api/boxes/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM squares WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
