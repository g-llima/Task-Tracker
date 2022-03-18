const express = require("express");
const app = express();

const PORT = 8080;

const url = "/dist/task-tracker";
app.use(express.static(__dirname + url));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + url + "/index.html");
});

app.listen(PORT, () => {
  console.log("server aberto em:", PORT);
});
