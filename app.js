require('dotenv').config();

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log(`Hey ! I'm ${name}, wilder in ${city}, and I love ${language}`);