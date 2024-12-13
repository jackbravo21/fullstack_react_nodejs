const express   = require("express");
const router    = express.Router();
const { userValidationRules, validate } = require("../middlewares/expressValidator");
const authenticateToken = require("../middlewares/authCookieToken");
const { checkLogin, checkUserDB, checkUserToEdit, register, editUser, deleteUser, getOne, fetchAll} = require("../controller/userController");

router.post("/login", userValidationRules, validate, checkLogin);

router.post("/check", checkUserDB);

router.post("/count", checkUserToEdit);

router.post("/create", userValidationRules, validate, register);

router.put("/edit", authenticateToken, userValidationRules, validate, editUser);

router.delete("/delete/:id?", authenticateToken, deleteUser);

router.get("/one", getOne);

router.get("/all/:type?", fetchAll);
router.post("/all", fetchAll);

module.exports = router;

