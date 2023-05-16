const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo_controller');

router.get('/', todoController.home);
router.post('/add-task', todoController.add);
router.get('/delete-task', todoController.delete);

module.exports = router;