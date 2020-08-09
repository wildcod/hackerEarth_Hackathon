const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    due_date : {
        type : Date,
        required : true,
    },
    label : {
        type : String,
        required : true,
        enum : ['personal', 'work', 'shopping', 'others']
    },
    status : {
        type : String,
        required : true,
        enum : ['new', 'inProgress', 'completed']
    }
});

module.exports = mongoose.model('Task' ,taskSchema);