import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    // const d = new Date("October 18, 2024 01:15:00"); // friday
    // const d = new Date("October 19, 2024 01:15:00"); // saturday
    const d = new Date() // today
    let day = d.getDay();

    let type = "a weekday";
    let adv = "it is time to work hard";

    if (day === 0 || day === 6){ // 0 - sunday; 6 - saturday
        type = "the weekend";
        adv = "it is time to have some fun";
    }
    // has to be in folder "views"
    res.render("index.ejs", {
        dayType: type, 
        advice: adv
    });
});

app.listen(3000, () =>{
    console.log(`Listening on port ${port}`);
});