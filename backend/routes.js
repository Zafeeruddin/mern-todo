const express=require("express")
const { addTodo, updateTodo } = require("./types")
const { todos } = require("./db")

const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())


app.post("/addTodos",async function(req,res){
    const title=req.headers.title;
    const description=req.headers.description;
    const data=addTodo.safeParse({
        title:title,
        description:description
    })

    if(!data.success){
        res.json(data.error.errors)
    }
    const task=new todos({
        title:title,
        description:description,
        completed:false
    })
    await task.save()
    res.json({
       "task":task
    })
})

app.put("/updateTodos",async function(req,res){
    const id=req.headers.id;
    const data=updateTodo.safeParse({
        id:id
    })
    if(!data.success){
        res.json({
            "msg":data.error.errors
        })
    }
    console.log("data good")
    await todos.update({
        _id:id //mongodb automatically creates _id uniquely to all objects created
    },{
        completed:true
    })
    res.json({
        "Message":"task completed"
    })
})

app.get("/getTodos",async function(req,res){
    const tasks= await todos.find();  //getting all the tasks 
    res.json({
        tasks
    })
})


app.listen(3000)