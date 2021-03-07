
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


//! require("./seeders/seed"); // Either npm run seed or keep this in here uncommented and it will run the seed

const PORT = process.env.PORT || 3009;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkOuts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


