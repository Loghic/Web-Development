import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let allPosts = [];

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { allPosts: allPosts});
  });

app.post("/submit", (req,res) => {
    const submitedPost = {
        name: req.body["postName"],
        message: req.body["postData"],
    };
    allPosts.push(submitedPost);
    res.render("index.ejs", { allPosts: allPosts });
})

app.delete("/deletePosts", (req,res) =>{
    allPosts = []
    res.sendStatus(200);
});

app.delete('/deletePost/:index', (req, res) => {
    const postIndex = parseInt(req.params.index, 10);
    if (postIndex >= 0 && postIndex < allPosts.length) {
        allPosts.splice(postIndex, 1); 
        res.sendStatus(200);
    } else {
        res.status(404).send('Post not found'); 
    }
});

app.put('/updatePost/:index', (req, res) => {
    const index = parseInt(req.params.index, 10); 
    const updatedData = req.body; 

    if (index >= 0 && index < allPosts.length) {
        allPosts[index].name = updatedData.name;
        allPosts[index].message = updatedData.message;

        console.log(`Post at index ${index} updated.`);
        res.sendStatus(200); 
    } else {
        res.status(404).send('Post not found'); 
    }
});


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});