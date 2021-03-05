const express = require('express')
const router = express.Router()

const { 
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo 
} = require('../controllers/todo_controller')

const { findTodo } = require('../middleware/helper')

router.get('/', getAllTodo)
router.post('/', createTodo)
router.get('/:id', findTodo, getTodo )
router.patch('/:id', findTodo, updateTodo)
router.delete('/:id', findTodo, deleteTodo)

module.exports = router