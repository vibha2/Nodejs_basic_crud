// import the model
const Todo = require("../models/Todo")

//define router handler

exports.updateTodo = async(req,res) => {

    try{
        const {id} =  req.params;
        const {title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            //konsi id me update krna hai
            {_id: id},
            //kya update krna hai
            {title, description, updatedAt: Date.now()},
        )

        res.status(200).json(
            {
                success:true,
                data: todo,
                message: `Updated Successfully`,
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