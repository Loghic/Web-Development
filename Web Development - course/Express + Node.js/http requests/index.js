// Use "nodemon index.js" instead of "node index.js" (it updates our server without having to start it again ourselves)
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Home Page</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>My name is Matthew</p>");
})

app.get("/contact", (req ,res) => {
    res.send("<h1>Contact me</h1><p>via mail random@mail.com</p>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})