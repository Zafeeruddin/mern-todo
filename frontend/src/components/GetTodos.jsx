export const fetchData=async function(){
    const respone=await fetch("http://localhost:3000/getTodos")
    const data=await respone.json()
    return data.tasks;
}