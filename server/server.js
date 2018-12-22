import express from "express";
import path from "path";
import { MongoClient } from "mongodb";

import template from "./../template";
import devBundle from "./devBundle";

const CURRENT_WORKING_DIR = process.cwd();
const app = express();
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

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

app.listen(port, err => {
  if (err) console.log(err);
  console.info("server started on port %s.", port);
});
devBundle.compile(app);
