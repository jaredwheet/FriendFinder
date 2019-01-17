var router = require("express").Router();
var path = require("path");


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//Default Route if anything else is typed in
router.get('*', function (req, res) {
    res.redirect('/');
});

module.exports = router;
