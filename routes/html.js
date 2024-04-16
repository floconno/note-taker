const html = require('express').Router();
const path = require('path');

// GET /notes

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET *

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

module.exports = html;