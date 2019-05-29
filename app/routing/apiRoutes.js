const friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("api/friends", function(req, res) {

        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        
        var bestFriend = {
            name: "",
            photo: "",
            scoreDifference: 40
        };

        newFriend = req.body
        newFriendName = req.body.photo;
        newFriendPhoto = req.body.photo;
        newFriendScores = req.body.scores;

        console.log(newFriend);
        
        var totalDifference = 0;

        for(var i = 0; i < friendsData.length; i++) {

            totalDifference = 0;

            console.log(`Friend : ${friendsData[i].name}`);

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
