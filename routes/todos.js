const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");

//define API routes
router.post("/createTodo", createTodo);

module.exports = router;

// postman: http://localhost:3000/api/v1/createTodo
// {
//     "title": "Vibha Sahu",
//     "description": "MERN Stack developer"
// }