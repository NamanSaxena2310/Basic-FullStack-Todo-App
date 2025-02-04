const express = require('express')
const {createTodo} = require('./types')
const {updateTodo} = require('./types')
const app = express()

app.use(express.json())


app.post('/todo', (req,res)=>{
  const parsedPayload = createTodo.safeParse(req.body)
  
  if (!parsedPayload.success) {
    res.status(411).json({
      message : "Please enter a valid input"
    })

    return
  }



} )

app.get('/todos' ,(req,res)=>{

})


app.put('/completed',(req,res)=>{
  const parsedId = updateTodo.safeParse(req.body)

  if (!parsedId.success) {
    req.status(411).json({
      message: "Please eneter a valid id "
    })
  }
  return
})

app.listen(3000,()=>{
  console.log('App running')
})