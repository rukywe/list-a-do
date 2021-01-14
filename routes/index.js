const express = require('express')
const router = express.Router(); 
const Todo = require('../model/todoList')

//Routers........

router.get("/", async (req, res) => {

    const getTodos = await Todo.find()
    res.render('index', {getTodos})
})


router.post("/", async (req, res) => {
    const { addtodo } = req.body
    try {
        const newTodo = await new Todo({  
          todo: addtodo })
        await newTodo.save()
        res.redirect('/') 
    } catch (error) {
        console.log(error)
    }
    // console.log(addtodo)
})

router.delete('/:id', async (req, res) => {
    
    const {id} = req.params; 
    const deletedTodo = await Todo.findByIdAndDelete(id)
    res.redirect('/')
  })


module.exports = router