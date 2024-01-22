const express = require("express");
const path = require("path");
const app = express();
const img_path = path.join(__dirname, "./images");
const PORT = 12010;

const main = async () => {
  app.use("/images", express.static(img_path));
  app.listen(PORT, console.log("start image server"));
};

main();
