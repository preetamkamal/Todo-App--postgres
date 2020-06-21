const express = require("express");
const app = express();
const cors = require("cors");
//middleware
app.use(cors);

app.listen(5000, () => {
  console.log("Connected to port 5000");
});
