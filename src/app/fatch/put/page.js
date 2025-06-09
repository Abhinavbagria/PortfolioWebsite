
'use client'
import { useState } from "react"

const put =()=>{
const [name,setName]=useState("name");
const [edit,setEdit]=useState();


const edituser =async ()=>{
// console.log(edit)
    let response= await fetch("http://localhost:3000/api/users/23",{
        method:"Put",
        body:JSON.stringify({name,edit})
    
    });
    response=await response.json();
    console.log(response)
    
    }
    return(
<>


<h1>hyy put </h1>

<input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
    <input placeholder="edit " value={edit } onChange={(e)=>setEdit(e.target.value)} />
   
    <button onClick={edituser}> click to edit  </button>
</>



    )
}

export default put