import mongoose from "mongoose";

//validating the email
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

//the structure of the userInfo
const userInfo = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: [300, "exceed the name range"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true,"Email Already Exist,Use Another Email"],
    required: [true, "Email address is required"],
    validate: {
      validator: validateEmail,
      message: "Please Enter Valid email",
    },
  },
  profession: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
});

//make the collection of User 
const User = mongoose.model('User',userInfo);

//export the User 
export default User;
