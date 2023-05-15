//using this, you'll get to know, how crud operation works
// npm run dev - to start
const mongoose = require("mongoose");
const express = require("express");
const app = express();


//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for Todo Api
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT} `);
})

//connect to the database
mongoose.connect(process.env.DATABASE_URL ,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(() => console.log("db connection successfully"))
.catch( (error) => {
    console.log("Issue in DB Connection");
    console.error(error.message);
    process.exit(1);
});

//default route
app.get("/", (req, res) =>
{
    res.send(`<h1>  This is Homepage</h1>`)
})