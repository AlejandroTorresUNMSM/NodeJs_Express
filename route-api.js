const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        curso : 'NodeJS -  Express'
    });
});

module.exports = router;