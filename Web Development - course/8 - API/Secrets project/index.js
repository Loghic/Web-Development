import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "https://secrets-api.appbrewery.com"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(URL+ "/random");
        const result = response.data;
        console.log(result);
        res.render("index.ejs", {
            user: result.username,
            secret: result.secret
        });
    } catch (error){
        console.error("Failed to make request:", error.message);
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
