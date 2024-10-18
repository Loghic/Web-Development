// var generateName = require("sillyname");

// if this is added to package.json: "type": "module",
import generateName from "sillyname";
var sillyname = generateName();

console.log(`My name is ${sillyname}.`)

// const superheroes = require("superheroes");
import {randomSuperhero} from "superheroes";
console.log(`I am ${randomSuperhero()}!`);