const express = require("express");
const router = express.Router();
const userController = require("./user.controllers");

router.get("/users", userController.getAll);

router.post("/register", userController.register);
// router.put("/user/:id", userController.update);
// router.delete("/user/:id", userController.delete);

module.exports = router;
