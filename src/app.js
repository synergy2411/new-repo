const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

// const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
const viewDirectory = path.join(__dirname, "../templates/views");
const partialsDirectory = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewDirectory);
hbs.registerPartials(partialsDirectory);

app.use(express.static(publicDirectory));

const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    console.log(req.method, req.url);
    // res.sendFile(publicDirectory + "/index.html");
    res.render("index");
})

app.get("/about", (req, res)=>{
    res.render("about");
})

app.listen(port, ()=>{
    console.log("Server running on Port " + port);
})
