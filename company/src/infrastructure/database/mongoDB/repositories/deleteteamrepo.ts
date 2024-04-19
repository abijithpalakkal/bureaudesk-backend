import { team } from "../models/team"

export const deleteTeamRepo=async(data:any)=>{
   try{
    console.log(data,"hcdauibibd")
       const teamdata= await team.findByIdAndDelete(data)
       return teamdata
   }catch(error:any){
     throw new Error(error?.message)
   }
}
