//Require module
const friends = require("../data/friends.js");

module.exports = (app) => {

    //GET all friends
    app.get("/api/friends", (req, res) => res.json(friends));

    //POST new entry to array and compare + display results
    app.post("/api/friends", (req, res) =>
    {
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        
    });
}