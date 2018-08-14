var path = require("path");

var friends = require("../data/friends.js");

// exporting this function so we can actually use it
module.exports = function(app) {

    // Displays all available friends
    app.get("/api/friends", function(req, res) {
        // console.log(friends);
        return res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        // setting the users inputs into vars
        var userInput = req.body;
        var userScores = userInput.scores;

        // defining your new friend with some empty vars
        var yourNewFriend = [];
        var newFriendName = '';
        var newFriendImg = '';

        var yourNewFiend = [];
        var newFiendName = '';
        var newFiendImg = '';
        // with 10 questions, the greatest difference would be 
        var totalDiff = 10000;

        var fiendDiff = 0;

        // looking for the closest match through the entire friend api found in app/data/friends.js
        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i]);
            // var to be set as the absolute difference between the user an each other possible friend
            var diff = 0;
            // another for loop to loop through each of the scores arrays
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            if (diff < totalDiff) {
                // make the total diff equal to the diff if it's lower. So the end result will be the lowest difference overall

                totalDiff = diff;
                yourNewFriend = friends[i];
                newFriendName = friends[i].name;
                newFriendImg = friends[i].url;

            }
        }

                // looking for the closest match through the entire friend api found in app/data/friends.js
        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i]);
            // var to be set as the absolute difference between the user an each other possible friend
            var diff = 0;
            // another for loop to loop through each of the scores arrays
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            if (diff > fiendDiff) {
                // make the total diff equal to the diff if it's lower. So the end result will be the lowest difference overall

                fiendDiff = diff;
                yourNewFiend = friends[i];
                newFiendName = friends[i].name;
                newFiendImg = friends[i].url;

            }
        }

        var exists = true;

        // adds the userInput to the friends api
        function inArray(needle,haystack){
            for(var i=0;i<haystack.length;i++){
                if(haystack[i]===needle){
                   return exists = true;
                    console.log("This already exists")  
                }

                exists = false;
                console.log("CAN'T SEEM TO FIND IT!")
            }

            if (exists === false){
                friends.push(userInput);
            }
            
        }

        // checks if they're in the array and pushes if appropriate
        inArray(userInput, friends)



        // sends the response back to /survey page
        res.json({ name: newFriendName, url: newFriendImg,  fiend: newFiendName, fiendUrl: newFiendImg });
        // console.log(yourNewFriend);
        console.log("Name: " + newFriendName);
        console.log("New Fiend: " + newFiendName);
        console.log("Fiend IMG: " + newFiendImg)
    });

};

