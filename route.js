const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //res.send('<h1>Hola mundo EXPRESS</h1>');
    res.render('index.ejs');
});
//tenemos que definir la ruta 

router.get('/login',(req,res)=>{
    //res.send('<h1>Login en EXPRESS</h1>');
    res.render('login.ejs');
});






module.exports = router;