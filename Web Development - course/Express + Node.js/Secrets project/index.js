//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const secretPassword = "ILoveProgramming";
const homePage = __dirname + "/public/index.html";
const secretPage = __dirname + "/public/secret.html";

const app = express();
const port = 3000;

var showSecret = false

app.use(bodyParser.urlencoded({ extended: true}));

// can also be written like this instead of using "bodyParser"
// It is already incorporated in express
// app.use(experss.urlencoded( {extended: true}));

function checkSubmition(req, res, next){
    showSecret = false;
    console.log(req.body);
    if (req.body["password"] === secretPassword) {
        showSecret = true;
    }
    next();
};

app.use(checkSubmition);

app.get("/", (req, res) => {
    res.sendFile(homePage);
});

app.post("/check", (req, res) =>{
    if (showSecret){
        res.sendFile(secretPage);
    } else{
        res.sendFile(homePage);
    }
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});