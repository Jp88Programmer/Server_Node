//import the module
import express from "express";
import mongoose from "mongoose";
import path from "path";
// import User from "./Collections/User.js";
// import userRouter from "./Router/userRouter.js";
// import contentRouter from "./Router/contentRounter.js";
import bodyParser from "body-parser";
import signup from "./Router/SignUp/signup.js";
import login from "./Router/Login/login.js";
// import login from "./Router/login.js"
// import  profile  from "./Router/profile.js";
// import  category  from "./Collections/Category/category.js";

// import cors from "cors";

//set the port
const port = process.env.PORT || 5000;
const app = express();

//connect the database
mongoose
  .connect("mongodb://localhost:27017/Bloggify")
  .then(() => console.log("database connect successfully"))
  .catch((err) => console.log("Error occur\n", err));

// console.log(User);

//make the database entry to save as the promise
// const u1 = new category({
//   heading: "jayendra",
//   description: "parmar@gmail.com",
//   conclusion: "BE",
//   category: "Technology",
//   userId: "1234#jayep%ypuu",
// });

// const res = await u1.save();
// console.log(res);
// app.use()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors);
// app.use("/api", userRouter);
// app.use("/api", contentRouter);
// app.use("/api",login)
// app.use("/user",profile);
app.use("/api",signup);
app.use("/api",login);


// const db = mongoose.connection;
// console.log(db.collection("user").toArray((err,data)=>{
//   console.log(data);
// }))
//api request
// app.get("/", (req, res) => {
//   console.log("hello world its server started long time");
//   // res.end("hello Jayendra paramar");

//   res.write("<h1>hello Jayendra Parmar</h1>");
//   // res.send("server start very long time")
//   res.write("<hr/>");

//   for (let i = 0; i < 10; i++) {
//     res.write(
//       `<div style="color : red; background-color:yellow; padding:30px; display:flex; flex-direction:column; align-item:center; ">server start very long time </div>`
//     );
//     res.write("<br/>");
//   }

//   res.end("");
// });

//server listen   at specific port
app.listen(port, () => {
  console.log("server starting at port NO", port);
});


//path of the your project 
//sudo system design 
/*
 * first to set user sign up and also authetication of the user
 * after set login fuctionality
 * profile view 
 * profile page design with api 
 * save blog => post blog, edit blogs and delete blogs 
 * view the save blog in profile page 
 * bcrypt authecation
 * final design with all check
 * reduce the code sence
 * remaining page should be modified 
 * -> logo maker , images setup , contact page , service content and all its maintain the design with prettey menner
 * deploy the code github 
 * hosting setup with host the website 
 * final output use the sydo user 
 */
// fullstack developement work mangement its too important as the life balance important 
// therefore you should be creative new idea or new template and also your never give up thought process should be important 
// stuck : don't assign and incetive new things responsiablity 






//deadline 15 day 
//deadline 15 december to work completed 

//before exam start your website should be completed 
// next projects start your setup thing 
