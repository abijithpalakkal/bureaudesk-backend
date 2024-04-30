import { team } from "../models/team"

export const deleteTeamRepo=async(data:any)=>{
   try{
  
       const teamdata= await team.findByIdAndDelete(data)
       return teamdata
   }catch(error:any){
     throw new Error(error?.message)
   }
}
