import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
//This imports function fileURLToPath from Node.js's built-in url module.
import path from "path";

const __filename = fileURLToPath(import.meta.url);
//`__filename` variable, which holds the full path to the current file, including the filename.
// import.meta.url returns a URL containing the absolute location of the file.
const __dirname = path.dirname(__filename);
//__dirname → the path to the folder containing the current file.

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Do not change code above this line
app.get("/api/:date", (req, res) => {
  //res.send(req.params.date);
  const date = /^\d+$/.test(req.params.date)
    ? new Date(Number(req.params.date))
    : new Date(req.params.date);
 if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
 }
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });

});
// Do not change code below this line
app.get("/api", (req, res) => {
  const date = new Date();

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
