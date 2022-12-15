const express = require("express")

const router = express.Router();

const{home, createUser, getUsers, editUser, deleteUser} = require("../controller/userController");

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser", editUser);
router.delete("/deleteUser", deleteUser);

module.exports = router;