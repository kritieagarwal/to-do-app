const { response } = require('express');
const taskList = require('../model/todo-task');

// home page controller
module.exports.home = function (req, res) {
    taskList.find({})
        .then((task) => {
            return res.render('home', {
                title: 'TO-DO APP',
                todo_list: task
            });
        })
        .catch(err => {
            console.log('Error in fetching list from db', err);
            return;
        });
};

// controller that is invoked on clicking add task button
module.exports.add = function (req, res) {
    taskList.create(req.body)
        .then(task => {
            console.log(task);
            return res.redirect('/');
        })
        .catch(err => {
            console.log('Error in adding task', err);
            return;
        });
}

// controller that is invoked on clicking delete task button
module.exports.delete = function (req, res) {
    let id = req.query;
    console.log(id);

    let checkboxes = Object.keys(id).length;

    for (let i = 0; i < checkboxes; i++) {
        taskList.findByIdAndDelete(Object.keys(id)[i])
            .then(task => {
                return res.redirect('back');
            })
            .catch(err => {
                console.log('Error in deleting task', err);
                return;
            })
    }
}