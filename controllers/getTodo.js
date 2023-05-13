const Todo = require("../models/Todo")

exports.getTodos = async(req,res) => {

    try{
        //fetch all todos item from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data: todos,
            message: "Entire Todo data is fetched",
        })
        

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data: "Internal server error",
                message: err.message
            }
        )

    }
}

exports.getTodoById = async(req,res) => {

    try{
        //extract todo item bases on Id from db
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id})

        //data for given id not found
        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message: "No data found", 
            })
        }
        //data for given ID found

        //response
        res.status(200)
        .json({
            success:true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        })
        

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data: "Internal server error",
                message: err.message
            }
        )

    }
}