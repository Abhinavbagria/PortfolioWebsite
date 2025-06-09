import { detail } from "@/db";
import { NextResponse } from "next/server";

export function GET(request,content){
console.log(content)

   const data=detail;
   const datauser=data.filter((data)=>data.id==content.params.id);
return NextResponse.json(datauser);

}

export function PUT(request){
   // const data=detail;


   return NextResponse.json({result:"working... gudput"},{status:"209"});
}
// export async function POST(request){
//    try{
//   const payload = await  request.json();
//   console.log(payload);
//    }catch(error){
//       console.log("not working",error)
//    }
//    return NextResponse.json({result:"working... gud"},{status:"207"})
// } 

export function DELETE (request){

   return NextResponse.json({result:"successfully deleted "},{status:"203"});
}