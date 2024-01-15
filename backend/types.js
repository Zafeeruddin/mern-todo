const z=require("zod")

const addTodo=z.object({
    title:z.string(),
    description:z.string()
})


const updateTodo=z.object({
    id:z.string()
})


module.exports={
    addTodo:addTodo,
    updateTodo:updateTodo
}

