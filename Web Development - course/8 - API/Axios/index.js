import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  let link = "https://bored-api.appbrewery.com";
  if (req.body.type !== "" || req.body.participants !== ""){
    link += "/filter?";
    if (req.body.type !== "" && req.body.participants !== ""){
      link += `type=${req.body.type}&participants=${req.body.participants}`;
    }else if (req.body.type !== ""){
      link += `type=${req.body.type}`;
    }else{
      link += `participants=${req.body.participants}`;
    } 
  } else {
    link += `/random`;
  }
  console.log(link);
  try {
    const response = await axios.get(link);
    let result = response.data;
    if (result.length > 1){
      result = result[Math.floor(Math.random() * result.length)];
    }
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
