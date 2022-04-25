
const router = require('express').Router();
let User = require("../Models/User");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const role = req.body.role;
    const dept = req.body.dept;

    const newUser = new User({
        name,
        email,
        dob,
        role,
        dept
    })
    
    newUser.save().then(()=>{
        res.json("User added");
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;