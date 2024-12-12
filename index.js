const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors({ origin: '*' }));

const mostPopularLanguages = new sqlite3.Database(path.join(__dirname, 'mostPopularLanguages.db'));
const allLanguages = new sqlite3.Database(path.join(__dirname, 'allLanguages.db'));

app.get('/mostPopularLanguages', (req, res) => {
    mostPopularLanguages.all("SELECT * FROM mostPopularLanguages", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

app.get('/allLanguages', (req, res) => {
    allLanguages.all("SELECT * FROM allLanguages", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running!');
});
