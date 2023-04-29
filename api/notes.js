const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../utils/fsUtils');


router.get('/', (req, res) =>{
  res.status(200).json({status: 'success', data: db });
  readFromFile('db/db.json');
})

// create new resource
router.post('/', (req, res) =>{
  console.log(req.body);
  const newNote = {...req.body, id: uuidv4() }
  db.push(newNote);
  console.log(db)
  writeToFile('db/db.json', db )
  res.status(200).json({status: 'success', newData: db });
  
})

// update a resource
router.put('/:id', (req, res) =>{
  
})


router.delete('/:id', (req, res) =>{
  
})

module.exports = router;