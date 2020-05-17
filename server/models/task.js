const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
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