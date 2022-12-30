const User = require("../Model/user");
const express = require('express');
const RouterFun = require("../Middleware/Error");
const CreateUserSchema = require("./CreateUserSchema");
const { AuthencationUser } = require("../../Utlis/Helper");
// const Authencation = require("../Middleware/Auth");
const router = express.Router();

router.post("/student/login", async(req,res)=>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
      return  res.status(400).send("invaild email");
    }

    if(user.password !== "12345678"){
       return res.status(400).send("invaild password");
    }
     
    const token = AuthencationUser({
        name: user.name,
        password: user.password,
        email: user.email
    })

    res.status(200).send({meassage: "Sucess", token });

})

router.post("/student", (req,res)=>{
    const playload = req.body;

    const {error} = CreateUserSchema(playload);

    if(error){
        res.status(400).send({message: error.details[0].message});
    }

    const user = new User(playload);
    res.status(200).send(user);

    user.save().then(()=> console.log("Data is succesfull saved")).catch((error)=> console.log(error))
})
router.get("/student", RouterFun( async (req,res)=>{
    const user =  await User.find();
    res.status(200).send(user)
}))
router.put("/student/:id", async (req,res)=>{
    const user = await User.findOne({ _id: req.params.id })
    user.name= "Aswad";
    user.save().then((result)=> res.send(result)).catch((err)=> res.send(err));
    res.send(user);
})
router.delete("/student/:id", async (req, res)=>{
    const user = await User.deleteOne({_id: req.params.id});
    res.status(200).send(user);
})

module.exports = router;