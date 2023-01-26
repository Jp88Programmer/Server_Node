import express from "express";
import User from "../../Collections/User/User.js";
const router = express.Router();

router.post("/login", async(req, res) => {
    // console.log(req.body);
    // res.send("data reach");
    try{

      const {email,password} = req.body;
      const isVaild = await User.findOne({email:email})
      
      if(isVaild !== null && email === isVaild.email){

        if(password === isVaild.password){
          res.send("login successfully");
        }else{
          res.send("password is incorrect please reenter")
        }
      }else{
        res.send(`${email} is not register please sign up `)
      }
    }
    catch(err){
      res.status(500).send(err);
    }
});

router.get("/login", (req, res) => {
  res.send("hello login");
});

export default router;
