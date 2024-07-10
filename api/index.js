const express = require('express');
const cors = require('cors');
const app = express();
const db = require('../src/db'); // Ensure the path to db.js is correct

// Use the CORS middleware
app.use(cors());
app.use(express.json());

app.get('/api/movies', (req, res) => {
  res.set('Cache-Control', 'no-store'); // Add this line to disable caching
  db.query('SELECT * FROM movies', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

app.get('/api/movies/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Fetching movie with id: ${id}`);
  db.query('SELECT * FROM movies WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error fetching movie:', err);
      res.status(500).send(err);
    } else if (results.length === 0) {
      console.log(`Movie with id ${id} not found`);
      res.status(404).send('Movie not found');
    } else {
      console.log('Movie found:', results[0]);
      res.json(results[0]);
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
