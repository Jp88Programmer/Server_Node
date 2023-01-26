import express from "express";
const router = express.Router();

router.post("/post-blog", (req, res) => {
  console.log(req.body);
  res.send("data reach");

  


});

router.get("/get-blog", (req, res) => {
  res.send("hello login");

  // data to fetch the database 


});

export default router;







