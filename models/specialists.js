const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialistsSchema = new Schema(
    {
        name: {
          type: String,
          trim: true,
          required: "Enter the name of the specialist"
        },
        organization: {
          type: String
        },
        specialty: {
            type: String,
            required: "enter the specialty of the Mental Health Professional"
          },
        cost: {
            type: Number,
            trim: true
          },
        ethnicity: {
            type: Number,
            trim: true
          },
        gender: {
            type: Number,
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
