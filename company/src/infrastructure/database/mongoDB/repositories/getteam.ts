import { team } from "../models/team"

export const getTeamRepo=async(data:any)=>{
   try{
    console.log(data,"hcdauibibd")
       const teamdata= await team.find(data)
       return teamdata
   }catch(error:any){
     throw new Error(error?.message)
   }
}
