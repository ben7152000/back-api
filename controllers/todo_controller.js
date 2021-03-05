const Todo = require('../models/todo')

// Get All
const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find()
    res.json(todo)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create One
const createTodo = async (req, res) => {
  const todo = new Todo({
    name: req.body.name
  })
  try {
    const newTodo = await todo.save()
    res.status(201).json(newTodo)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Find One
const getTodo = async (req, res) => {
  console.log(res.todo)
  res.json(res.todo)
}

// Update One
const updateTodo = async (req, res) => {
  if(req.body.name !== null) {
    res.todo.name = req.body.name
  }
  try {
    const updateTodo = await res.todo.save()
    res.json(updateTodo)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Delete One 
const deleteTodo = async (req, res) => {
  try {
    await res.todo.remove()
    res.json({ message: 'Deleted todo '})
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { 
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo 
}