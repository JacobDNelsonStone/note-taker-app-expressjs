const router = require('express').Router();
const fs = require('fs');
let db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../utils/fsUtils');

router.get('/', (req, res) =>{
  res.status(200).json( db );
  console.log(db);
  readFromFile('db/db.json');
  
})

// create new resource
router.post('/', (req, res) =>{
  console.log(req.body);
  const newNote = {...req.body, id: uuidv4() }
  db.push(newNote);
  console.log(db)
  writeToFile('db/db.json', db )
  res.status(200).json( db );
  
})

//   arr.filter( (item) => item.name = 'gary')

router.delete('/:id', (req, res) =>{
  const modDb = db.filter( (item) => item.id != req.params.id );
  res.status(200).json( db );
  writeToFile('db/db.json', modDb );
  db = modDb;

})

module.exports = router;