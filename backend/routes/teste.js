const express = require("express");
const router = express.Router();

router.get("/1", (req, res) => {
    console.log("Teste!");
    res.json({Message: "Teste!"});
});

router.get("/2", (req, res) => {
    console.log("Teste!");
    res.send("Teste!");
});

module.exports = router;