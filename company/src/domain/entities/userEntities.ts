import { ObjectId } from "mongoose";

export interface UserEntities {
  id?:ObjectId
  Description?: string
  Name?: string
  Dob?: Date
  Company?: ObjectId
  Contactno?: string
  Location?:  string
  Position?:  string
  Createdby?: ObjectId,
  Email: string,
  Authorization?: string,
  Department?: string,
  Departmentid?: ObjectId,
  Admin?: boolean,
  password?:string
}