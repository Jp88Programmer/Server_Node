
import express from "express";
const contentRouter = express.Router();

contentRouter.use((req, res, next) => {
  console.log("Time Now : ", Date.now());
  next();
});

contentRouter.get("/api/content", (req, res) => {
  res.send("this is the content rounter get method");
});

export default contentRouter;
