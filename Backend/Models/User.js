const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    
      name : {
        type : String,
        required :true
      },
      email : {
        type : String,
        required :true
      },
      dob : {
        type : String,
        required :true
      },
      role : {
        type : String,
        required :true
      },
      assign_lead : {
        type : String,
        required :false
      },
      dept : {
        type : String,
        required :true
      },
      pwd : {
        type : String,
        required :true
      }
})

const User = mongoose.model("User", userSchema);
module.exports = User;