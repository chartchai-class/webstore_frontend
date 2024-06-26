const express = require("express");
const app = express();

const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const addToCart = require("./model/sale_HistoryDB");

const port = 4001;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/views", express.static("views"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/assets", express.static("assets"));
app.use("/public", express.static("public"));
app.use("/controller", express.static("controller"));

app.use(expressLayouts);
app.set("layout", "./layout/main");
app.use(express.json());

app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

const routes = require("./routes/storeRoute");
app.use("/", routes);
app.use((req,res)=>{
    res.status(404);
    res.render("404",{layout: false});
});

app.listen(port, () => {
  console.log(`webstore_frontend is listening at ${port}`);
});
