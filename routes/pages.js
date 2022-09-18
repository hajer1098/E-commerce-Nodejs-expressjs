const { Router } = require("express");
var express = require("express");
var router=express.Router();


router.get("/", function (req, res) {
    res.render('index');

})



//exports 
module.exports=router;


