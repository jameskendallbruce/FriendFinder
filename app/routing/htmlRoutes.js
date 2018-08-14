var path = require("path");

// exporting this function so we can actually use it
module.exports = function(app) {

    // routing html paths
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};
  
