const mongoose = require("mongoose");
const data = require(__dirname + "/data.js");
const Movies = require(__dirname + "/../models/Films.js");

mongoose
  .connect("mongodb://localhost:27017/filmsTest", { useNewUrlParser: true })
  .then(connection => {
    return Movies.deleteMany();
  })
  .then(res => {
    return Movies.insertMany(data);
  })
  .then(() => {
    console.log("success");
    return mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
