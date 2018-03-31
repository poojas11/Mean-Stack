var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model

var TaskSchema = new Schema({
	email: {
		type: String,
		Required: "required email for identify user"
	},
	taskname: {
		type: String,
		Required: 'please enter the task name'
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		default: 'pending'
	},
	completed_date: {
		type: Date
	},
	update_date: {
		type: Date
	}
});

module.exports = mongoose.model("Tasks", TaskSchema);