const Todo = require('../models/todo')

const findTodo = async (req, res, next) => {
  let todo
  try {
    todo = await Todo.findById(req.params.id)
    if(todo === null) {
      return res.status(404).json({ message: 'Can not find todo' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  res.todo = todo
  next()
}

module.exports = { findTodo }