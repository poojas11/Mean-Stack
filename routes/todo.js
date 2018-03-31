var todo = require('../models/task')

exports.insertTask = (req, res) => {
    if(!req.body.taskName){
        res.json({
            success: false,
            msg: "Please enter task"
        })
    }else{
        var newTask = new todo({
            email: req.decoded.email,
            taskName: req.body.taskName,
            created_date: new Date(),
            status: req.body.status,
            completed_date: req.body.created_date,
            update_date: new Date()
        })

        newTask.save((err, data) => {
            if(err){
                res.json({
                    success: false,
                    msg: "Error in database"
                })
            }else{
                res.json({
                    success: true,
                    msg: "New Task entered"
                })
            }
        })
    }
}