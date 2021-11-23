const express = require("express");
const app = express();

const routerApi = require("./routes/index.routes");

const port = 3001;

// Midleware
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
routerApi(app);

app.listen(port, () => console.log("Server running on port", port));
