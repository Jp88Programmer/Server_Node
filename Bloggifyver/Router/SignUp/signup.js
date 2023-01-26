import express from "express";
import User from "../../Collections/User/User.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  console.log(req.body);

  try {
    const { name, email, profession, password } = req.body;

    const exist = await User.findOne({ email: email });

    console.log(exist, typeof exist);

    if (exist !== null && exist.email === email) {
      res.status(400).send(`${email} already exist`);
    } else {
      const user = new User({
        name,
        email,
        profession,
        password,
      });
      const response = await user.save();
      console.log(response);
      res.status(201).send("sava data successfully..");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/signup", async (req, res) => {
  // res.send("hello signup");
  try {
    // const user = new User();
    const response = await User.find();
    console.log(response);
    // const data = await res.json();
    res.status(201).send(response);
    console.log(res);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;

//
// bcrypt authetcation
// image upload to the server
//
//
// email verification and password both are verfi by the ui or react
//
