const friends = require("../data/friends.js");

function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        }

        var scoresArray = []

        for(var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }

        newFriend.scores = scoresArray;

        var scoreCompareArray = [];
        
        for (var i = 0; i < friends.length; i++) {
            
            var currentComparison = 0;

            for (var j = 0; j < newFriend.scores.length; j++){

                currentComparison += Math.abs(newFriend.scores[j] - friends[i].scores[j])

            }

            scoreCompareArray.push(currentComparison);

        }

        var bestMatch = 0;

        for(var i  = 1; i < scoreCompareArray.length; i++) {


            if(scoreCompareArray[i] <= scoreCompareArray[bestMatch]) {
                bestMatchPosition = i;
            }     
        }

        var bestFriendMatch = friends[bestMatch];

        res.json(bestFriendMatch);

        friends.push(newFriend);

    });

}

module.exports = apiRoutes;