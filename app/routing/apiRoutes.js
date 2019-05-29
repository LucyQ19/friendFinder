const friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("api/friends", function(req, res) {

        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        
        var bestFriend = {
            name: "",
            photo: "",
            scoresDifference: 200
        };

        newFriend = req.body
        newFriendName = req.body.photo;
        newFriendPhoto = req.body.photo;
        newFriendScores = req.body.scores;

        console.log(newFriend);


        for(var i = 0; i < friendsData.length; i++) {
            console.log(`Your new Best Friend is: ${friendsData[i].name}`);

            var totalDifference = 0;

            for(var j = 0; j < friendsData[i].scores.length; j++) {
                totalDifference += Math.abs(parseInt(newFriendScores[j]) - parseInt(friendsData[i].scores[j]));

                if(totalDifference < bestFriend.scoreDifference) {
                    bestFriend.name = friendsData[i].name;
                    bestFriend.photo = friendsData[i].photo;
                    bestFriend.scoreDifference = totalDifference;

                    console.log(`Your Best Friend is: ${bestFriend.name}`);
                }
            }

                console.log(`Difference in scores: ${ totalDifference}`);
        }

            friendsData.push(newFriend);

            res.json(bestFriend);
       
    });
  
}
