const express = require('express')
const {createTodo} = require('./types')
const {updateTodo} = require('./types')
const {todo} = require('./db')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


app.post('/todo', async (req,res)=>{
  const parsedPayload = createTodo.safeParse(req.body)
  
  if (!parsedPayload.success) {
    res.status(411).json({
      message : "Please enter a valid input"
    })

    return
  }

  console.log(parsedPayload)

  await todo.create(
    {
    title : parsedPayload.data.title,
    description : parsedPayload.data.description,
    completed: false
    }
  )

  res.json({
    message : "Todo has been created"
  })

} )

app.get('/todos' ,async(req,res)=>{

  const allTodos = await todo.find({})

  res.json({
    allTodos
  })

})


app.put('/completed',async(req,res)=>{
  const parsedId = updateTodo.safeParse(req.body)

  if (!parsedId.success) {
    res.status(411).json({
      message: "Please eneter a valid id "
    })
    return
  }

  const updatedTodo = await todo.updateOne(
    {_id : parsedId.data.id}  ,
    {$set:{
      completed: true
    }}
  )
  
  res.json({
    updatedTodo
  })

})

app.listen(3000,()=>{
  console.log('App running')
})