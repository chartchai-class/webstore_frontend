const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");

const port = 6001;
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layout/main");
app.use(express.json());

app.use("/assets", express.static("assets"));
app.use("/public", express.static("public"));

app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

const routes = require("./routes/storeRoute");
app.use("/", routes);

app.listen(port, () => {
  console.log(`webstore_frontend is listening at ${port}`);
});
