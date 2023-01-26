import mongoose from "mongoose";

// category : technology , art etc
// userid  which user post the blog 
//heading and the description 
// also put the image of the introduction of the topics 

const schemaObj = {
  heading: {
    type: String,
    minlength: 3,
  },
  decscription: {
    type: String,
  },
  conclusion: {
    type: String,
  },
  category: {
    type: String,
  },
  userId: {
    type: String,
  },
};


//the structure of model
const cat = new mongoose.Schema(schemaObj);

//make the collections
const category = mongoose.model("Category", cat);
//export the the category 

export default category


/*
const catTechnology = new mongoose.Schema(schemaObj);
const catArt = new mongoose.Schema(schemaObj);
const catNature = new mongoose.Schema(schemaObj);
const catEdution = new mongoose.Schema(schemaObj);
const catFinance = new mongoose.Schema(schemaObj);
const catBusiness = new mongoose.Schema(schemaObj);
const catFitness = new mongoose.Schema(schemaObj);
const catSocial = new mongoose.Schema(schemaObj);
const catUnity = new mongoose.Schema(schemaObj);

// const Technology = mongoose.model("Technology", catTechnology);
// const Art = mongoose.model("Art", catArt);
// const Nature = mongoose.model("Nature", catNature);
// const Education = mongoose.model("Education", catEdution);
// const Finacne = mongoose.model("Finacne", catFinance);
// const Fitness = mongoose.model("Fitness", catFitness);
// const Business = mongoose.model("Business", catBusiness);
// const Social = mongoose.model("Social", catSocial);
// const Unity = mongoose.model("Unity", catUnity);

// export {Technology, Art, Nature, Education, Finacne, Fitness, Business, Social, Unity};
*/