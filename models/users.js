const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const usersSchema = new Schema({
//   userid: { type: String, required: true, unique: true },
//   storytemplates: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "StoryTemplates"
//     }
//   ],
//   savedstories: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "SavedStories"
//     }
//   ]
// });

// instead of stories i guess what we need in the api information? we need to find an api that will give users info about the mental health professionals out there....
const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
