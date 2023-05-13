// import the model
const Todo = require("../models/Todo")

//define router handler

exports.deleteTodo = async(req,res) => {

    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);


        res.json(
            {
                success:true,
                message: `Todo DELETED`,
            }
        );

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