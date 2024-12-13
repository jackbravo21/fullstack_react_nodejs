const express   = require("express");
const router    = express.Router();
const upload    = require("../middlewares/multer.js");
const authenticateToken = require("../middlewares/authCookieToken");
const { createProduct, editProduct, editProductData, deleteProduct, getOneProduct, getAllProducts} = require("../controller/productController");

//router.post("/create", registerProduct);
router.post('/create', authenticateToken, upload.single('photo'), createProduct);

router.put("/edit", authenticateToken, editProduct);

router.put("/editdata", authenticateToken, upload.single('photo'), editProductData);

router.delete("/delete", authenticateToken, deleteProduct);

router.get("/one", getOneProduct);

router.get("/all/:type?", getAllProducts);
router.post("/all", getAllProducts);

module.exports = router;







/*
router.post("/create", (req, res) => {
    console.log("Cookies recebidos: ", req.cookies);
});

router.put("/edit", (req, res) => {
    console.log("Cookies recebidos: ", req.cookies);
});
*/