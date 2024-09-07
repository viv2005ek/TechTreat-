const express = require('express');
const router = express.Router();

const{allbeds,postBed,getBedByName,updatebedstatus}  = require('../controllers/control')

router.get('/allbeds',allbeds); //for seeing all beds in the db

router.get('/beds/:bedname',getBedByName)  //get the bed current status by typing only name

router.post('/addbeds',postBed); //add new bed to the db

router.put('/updatestatus/:bedname',updatebedstatus)  //update bed status 
    

module.exports = router;