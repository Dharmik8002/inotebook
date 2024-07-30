const mongoose = require("mongoose");

mongoose
  .connect( "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")
  .then((_success) => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
