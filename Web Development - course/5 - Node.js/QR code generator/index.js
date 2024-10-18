//inquirer npm package - user input
// qr-image turn URL to QR code image
// create txt file to save user input

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        name: "url",
        message: "Please, provide URL you would like to make into a QR code: "
    }
  ])
  .then((answers) => {
    const url = answers.url;

    const qrImage = qr.image(url, {type: "png"})

    qrImage.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile("userInput.txt", answers.url, (err) => {
        if (err) throw err;
        console.log("User input saved to the file!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Could not do something %d", error);
    } else {
      console.error(error);
    }
  });