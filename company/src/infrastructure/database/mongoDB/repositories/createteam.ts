import { team } from "../models/team"

export const createTeamRepo=async(data:any)=>{
   try{
       const teamdata= await team.create(data)
       return teamdata
   }catch(error:any){
     throw new Error(error?.message)
   }
}
