const express = require("express");

const router = express.Router();

const newsController = require("../controllers/news.controller");

const auth = require("../middleware/auth-middleware");

const upload = require("../middleware/storage");


router.post("/create",upload.single('file'),newsController.createNews);

router.get('/all',auth.authenticateToken,newsController.getAllNews);

router.get("/:id",auth.authenticateToken,newsController.getNewsById);

router.delete("/delete/:id",auth.authenticateToken,newsController.deleteNewsById);




module.exports = router;