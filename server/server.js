import express from "express";
import path from "path";
import { MongoClient } from "mongodb";

import template from "./../template";
import devBundle from "./devBundle";

let port = process.env.PORT || 3000;
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mernStartup";

MongoClient.connect(
  url,
  (err, db) => {
    if (err) console.log(err);
    console.log("Connected sucessfully to the mongodb server");
    db.close();
  }
);

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
const app = express();

app.get("/", (req, res) => {
  res.status(200).send(template());
});

app.listen(port, err => {
  if (err) console.log(err);
  console.info("server started on port %s.", port);
});
devBundle.compile(app);
