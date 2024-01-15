const mongoose=require("mongoose")
const { addTodo } = require("./types")
//connect to database

mongoose.connect("mongodb+srv://mohammedxafeer:No9YrDQ5MqHNx10w@cluster0.ze6jwfk.mongodb.net/Todos")
//mongoose.connect(process.env.MONGO_URL)
const todos=mongoose.model('Todos',{
    id:Number,
    title:String,
    description:String,
    completed:Boolean
})

module.exports={
    todos:todos
}