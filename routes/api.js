const api = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');



// GET /api/notes 
app.get('/', (req, res) => {
    readFromFile('./').then((data) => res.json(JSON.parse(data)));
  });

// POST /api/notes






