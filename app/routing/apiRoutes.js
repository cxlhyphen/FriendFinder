//Require module
const friends = require("../data/friends.js");

module.exports = (app) => {

    //GET all friends
    app.get("/api/friends", (req, res) => res.json(friends));

    //POST new entry to array and compare + display results
    app.post("/api/friends", (req, res) =>
    {
        //bestMatch object
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };

        console.log(req.body);

        //result of user survey and parse it
        let userData = req.body;
        let userScores = userData.scores;

        console.log(scores);

        let totalDifference = 0;

        //Loop through friends array, and for each object, loop through their score, compare and set
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for (let j = 0; j < friends[i].scores[j]; j++) {
                //calculating difference
                totalDifference += Math.abs(parseIntI(userScores[j]) - parseInt(friends[i].scores[j]));

                //if difference is less than comparison w/ last match set friend
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        };

        //push userdata to data array
        friends.push(userData);

        //finally send back bestMatch object to FE
        res.json(bestMatch);
    });
}