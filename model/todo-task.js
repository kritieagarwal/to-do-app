const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    // task title
    title: {
        type: String,
        required: true
    },

    // task description
    desc: {
        type: String,
        required: true
    },

    // task category
    cat: {
        type: String,
        required: true
    },

    // task date
    date:
    {
        type: String,
        required: true
    }
});

const TaskList = mongoose.model('TaskList', taskSchema);

module.exports = TaskList;