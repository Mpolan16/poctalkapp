const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialistsSchema = new Schema(
    {
        name: {
          type: String,
          trim: true,
          required: "Enter the name of the specialist"
        },
        nickname: {
          type: String
        },
        organization: {
          type: String
        },
        specialty: {
            type: String,
            required: "enter the specialty of the Mental Health Professional"
          },
        newclients:{
          type: String,
          required: true
        },
        typeclients:{
          type:String
        },
        cost: {
            type: String,
            trim: true
          },
        ethnicity: {
            type: String,
            trim: true
          },
        gender: {
            type: String,
            trim: true
          },
        date: {
          type: Date,
          default: Date.now
        }
      }
    );

const Specialists = mongoose.model("Users", specialistsSchema);

module.exports = Specialists;
