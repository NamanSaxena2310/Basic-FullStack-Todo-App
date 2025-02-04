const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@learningmongodb.zkb7g.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=LearningMongoDB').then(()=>{
  console.log("Database Connected")
})


const mySchema = mongoose.Schema({
  title: String,
  description:  String,
  completed:  Boolean
})

const todo = mongoose.model('todo',mySchema)

module.exports = {
 todo
}