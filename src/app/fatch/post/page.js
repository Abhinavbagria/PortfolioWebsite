'use client'

import { useState } from "react";

const post = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender,setGender]=useState("");

const adduser =async ()=>{

let response= await fetch("http://localhost:3000/api/users",{
    method:"Post",
    body:JSON.stringify({name,age,gender})

});
response=await response.json();

}
    return (
<>

    <input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
    <input placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)} />
    <input placeholder="gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
    <button onClick={adduser}> click to add </button>
    </>
    )

}

export default post;