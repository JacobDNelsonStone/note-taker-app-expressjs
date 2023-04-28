const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json')

router.get('/', (req, res) =>{
  console.log(req.body);

})

// get single resource
router.get('/:id', (req, res) =>{
  
})

// create new resource
router.post('/', (req, res) =>{
  
})

// update a resource
router.put('/:id', (req, res) =>{
  
})


router.delete('/:id', (req, res) =>{
  
})

module.exports = router;