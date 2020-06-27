const https = require("https");
const http = require("http");
const fs = require("fs");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = 8001;
const config = require("./config");
const app = express();
const key = fs.readFileSync("../src/_config/certificates/server.key");
const cert = fs.readFileSync("../src/_config/certificates/server.cert");
const certPayload = {
  key,
  cert,
};
const protectedRoutes = express.Router();
let server;
const onTrack = require("./onTrack.json");
const onDelayed = require("./onDelayed.json");
const onHold = require("./onHold.json");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", protectedRoutes);
app.set("Secret", config.secret);
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get("/userDetails/:userID", (req, res) => {
  try {
    const { userID } = req.params;

    if (userID === "12345") {
      res
        .status(200)
        .send({
          status: 200,
          message: "Success",
          data: {
            title: "CBSE: Grade 5 Maths - Algebra",
            userName: "Milky James",
            userNo: "12345",
            mainTabContent: [
              "Task",
              "Conversation",
              "Files",
              "Resources",
              "Status",
            ],
            subTabContent: [
              "List",
              "Gantt",
              "Board",
              "Calendar",
              "Pivot",
              "Process",
            ],
          },
        });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/onTrack/:userID", (req, res) => {
  try {
    const { userID } = req.params;

    if (userID === "12345") {
      res.status(200).send({ status: 200, message: "Success", data: onTrack });
    } else {
      res.status(404).send({ message: "Not Found" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/onDelayed/:userID", (req, res) => {
  try {
    const { userID } = req.params;

    if (userID === "12345") {
      res
        .status(200)
        .send({ status: 200, message: "Success", data: onDelayed });
    } else {
      res.status(404).send({ message: "Not Found" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/onHold/:userID", (req, res) => {
  try {
    const { userID } = req.params;

    if (userID === "12345") {
      res.status(200).send({ status: 200, message: "Success", data: onHold });
    } else {
      res.status(404).send({ message: "Not Found" });
    }
  } catch (e) {
    console.log(e);
  }
});

if (process.env.ENABLE_SSL === "true") {
  server = https.createServer(certPayload, app);
} else {
  server = http.createServer(app);
}

server.listen(port, () => console.log("Server Started at port", port));
