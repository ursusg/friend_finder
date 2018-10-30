var friendsData = require("../data/friends")

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
        console.log(req.body)
    })

    // When a post request is made to the route "/api/friends",
    // the app then runs this callback function on that data!
    app.post("/api/friends", (req, res) => {

        friendsData.push(req.body);
        res.json(true);

        console.log(req.body);
        
    });

}