const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

const upload = require("../middleware/storage");


router.post("/register",upload.single('file'),userController.register);

router.post('/login',userController.login);

router.get('/:id',userController.getUserById);



module.exports = router;