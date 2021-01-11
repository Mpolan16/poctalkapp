let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/specialists", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let specialistsSeed = [
    {
        name: "Pat Ramos",
        nickname: "Pat",
          organization: "bcbs",
          specialty: "family",
          newclients:"yes",
          typeclients:"everyone welcom",
          cost: "1",
          ethnicity: "latino",
          gender: "m",
          date: new Date(new Date().setDate(new Date().getDate() - 7))
    },
    {
        name: "Maria Martinez",
        nickname: "Maria",
          organization: "unh",
          specialty: "individual",
          newclients:"yes",
          typeclients:"adults",
          cost: "2",
          ethnicity: "latina",
          gender: "f",
          date: new Date(new Date().setDate(new Date().getDate() - 7))
    }
  
];

db.Specialists.deleteMany({})
  .then(() => db.Specialists.collection.insertMany(specialistsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });