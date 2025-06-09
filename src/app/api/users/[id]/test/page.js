'use client'


import { useEffect, useState } from "react";
const test = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/users/22");
            const result = await response.json();
            console.log(result.name);
           
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            
        }
    };
    return (

        <>
            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <button > click to add </button>
        </>
    )
}

export default test