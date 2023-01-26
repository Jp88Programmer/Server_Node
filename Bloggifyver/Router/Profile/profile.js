
//here 
/*
    when user signup than the data store in the database 
    after that its fetch the data into using this 
    get profile
    edit profile 
    

*/

import express from "express";
const router = express.Router();

router.post("/profile", (req, res) => {
  console.log(req.body);
  res.send("data reach");
});

router.get("/profile", (req, res) => {
  res.send("hello profile");
});


router.get("/profile:id",(req,res)=>{
  
})
export default router;

