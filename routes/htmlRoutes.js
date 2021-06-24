const router = require("express").Router();
const path = require("path");
// renders home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});
//renders exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});
//renders stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

module.exports = router;
