'use client'


const data = () => {

const dele=async()=>{

    let response= await fetch("http://localhost:3000/api/users/22",{
        method:"Delete",
       
    
    });
    response=await response.json();
    console.log(response);
    if(response){
        alert("sussefully deleted ")
    }else{
        alert("not deleted ")
    }

}
    return (
        <>

<button onClick={dele}>delete</button>
          
        </>


    )
}

export default data;