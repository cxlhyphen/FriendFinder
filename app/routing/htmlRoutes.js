//Dependencies
const path = require("path");

module.exports = (app) => {
    //Handles GET requests for HTML pages

    //Homepage
    app.get("/", (req, res) => {
        res.sendFile(path.join(`${__dirname} /../public/home.html`));
    });
    //Survey
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(`${__dirname} /../public/survey.html`));
    });
    //Default, if no match
    app.get("*", (req, res) => {
        res.sendFile(path.join(`${__dirname} /../public/home.html`));
    });

}