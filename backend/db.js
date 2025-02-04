const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@learningmongodb.zkb7g.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=LearningMongoDB').then(()=>{
  console.log("Database Connected")
})


const mySchema = new mongoose.Schema({
  title: {type:String,required: true},
  description:  {type:String,required: true},
  completed:  {type: Boolean, default: false}
})

const todo = mongoose.model('todo',mySchema)

module.exports = {
 todo
}