//Dependencies
const express = require("express");
require("dotenv").config();

//Creating an express app
const app = express();

//Port for server to run on
const PORT = process.env.PORT || 8000;

//Set up middleware for data parsing so we can post JSON objects
app.use(express.urlencoded( {extended:true} ));
app.use(express.json());

//Require routing module
require("./app/routing/htmlRoutes.js")(app);

//app listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
