// import { Express } from "express";
// import { Express } from "express";

// import express from express;
// import { rejects } from "assert";
import express, { response } from "express";
// import { resolve } from "path";
// express.route
const userRouter = express.Router();

// userRouter.use((req, res, next) => {
//   console.log("Time Now : ", Date.now().toLocaleString());
//   next();
// });
const data = {
    name:"jayendra",
    do:"nothing",
    like:"newSexThoughts"
}



function res(req,res,next){
    console.log("response mela hai");
    next();
}


userRouter.post("/signup",(req,res)=>{
    console.log("data reach the server");
    // console.log(req.body);
    // res.send("data reach the server");
    // next();
    console.log(req.body);
    console.log(req.body.name);

    res.send("data reach the location");


})

userRouter.get("/signup",(req, res) => {

    // const pr = new Promise((resolve,reject)=>{
    //     try{
    //         resolve(data);
    //     }catch(err){
    //         reject(err);
    //     }
    // })
  res.send("hello");
});

userRouter.get("/home",(req,res)=>{
    console.log("lets get home");
    res.send("lets go home");
})

export default userRouter;

