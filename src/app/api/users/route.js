import { NextResponse } from "next/server";

export function GET(request,content){

    // console.log(content.params.age)
return NextResponse.json({name:"abhinav",age:"19",class:"PHD"},{status :200});


}




export async function POST(request){
    try{
   const payload = await  request.json();
   console.log(payload);
    }catch(error){
       console.log("not working",error)
    }
    return NextResponse.json({result:"working... gud"},{status:"207"})

}