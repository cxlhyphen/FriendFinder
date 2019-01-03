//Dependencies
const path = require("path");

module.exports = (app) => {
    //Handles GET requests for HTML pages

    //Home
    app.get("/", (req, res) => res.sendFile(path.join(`${__dirname} /../public/home.html`)));

    //Survey
    app.get("/survey", (req, res) => res.sendFile(path.join(`${__dirname} /../public/survey.html`)));

}