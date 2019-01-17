var router = require("express").Router();
var friends = require("../data/friends");


router.get("/friends", function (req, res) {
    return res.json(friends);
});

//other routes..
router.post("/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;
    console.log(newfriend)

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newfriend);
    
    //LOGIC TO FIND FRIENDMATCH     
    // Go through the friends API to compare scores
    currentClosestFriend = '';
    for (var i = 0; i < friends.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            var currentDifference = Math.abs(parseInt(friends[i].scores[j]) - parseInt(newfriend.scores[i]))
            totalDifference += currentDifference;
        }
        if (currentClosestFriend === '') {
            currentClosestFriend = friends[i];            
            currentClosestDistance = totalDifference;
            console.log(currentClosestDistance, currentClosestFriend)
            totalDifference = 0;
            
            
        }
        else if (totalDifference < currentClosestDistance) {
            currentClosestFriend = friends[i];
            currentClosestDistance = totalDifference;
            console.log(currentClosestDistance, currentClosestFriend)
            totalDifference = 0;
            
        }           
    }

    friends.push(newfriend);
    console.log(currentClosestFriend)
    res.json(currentClosestFriend);
});

module.exports = router