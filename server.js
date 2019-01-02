//Require Express, dotenv
const express = require("express");
require("dotenv").config();

//Creating an express app
const app = express();

//Port for server to run on
const PORT = process.env.PORT || 3030;

//Set up Express for data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//app listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
