
const router = require('express').Router();
let User = require("../Models/User");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const role = req.body.role;
    const assign_lead = req.body.assign_lead;
    const dept = req.body.dept;
    const pwd = req.body.pwd;

    const newUser = new User({
        name,
        email,
        dob,
        role,
        assign_lead,
        dept,
        pwd
    })
    
    newUser.save().then(()=>{
        res.json("User added");
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    User.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    }) 
})


router.route("/get_Agent").get((req,res)=>{

    User.find({role: 'Agent'}).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    }) 
})


router.route("/get_Agent__by_lead/:id").get((req,res)=>{
    let Agent_name = req.params.id;
    User.find({role: 'Agent',assign_lead:Agent_name}).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    }) 
})


router.route("/get_Lead").get((req,res)=>{

    User.find({role: 'Lead'}).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    }) 
})


router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name,email,dob,role,assign_lead,dept}=req.body;

    const updateuser = {
        name,
        email,
        dob,
        role,
        assign_lead,
        dept
    } 

    const update = await User.findByIdAndUpdate(userId,updateuser).then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updating data",error: err.message}); 
    })

})



router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User finded"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error: err.message}); 
    })
})



router.route("/get/:id").get(async(req,res)=>{

    let userId = req.params.id;

   const user =  await User.findById(userId).then(()=>{
        res.status(200).send({status:"User deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error: err.message}); 
    })
})







module.exports = router;