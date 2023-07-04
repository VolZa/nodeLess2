const express = require("express");
const router = express.Router();
const { getAllTasks } = requrie("../controllers/tasksControllers");

router.get('/db',  getAllTasks);

module.exports = {
   tasksRouter: router,
};