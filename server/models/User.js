const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Model, required is a field that is a required for a user to be added to the db
// Left out social media as that should be added according to what social media website we
// add functionality for.

const userSchema = new Schema({
  id: { type: String, required: true },
  AmazonID: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Age: String,
  Ethnicity: String,
  Income: Number,
  PhoneNumber: Number,
  //Tags: [{ tagID: Number }],
  //ActivitiesDone: [{ actvity: {type: Schema.Types.ObjectId, ref: "Activity"} }],
  Budget: String
});

mongoose.model("users", userSchema);
