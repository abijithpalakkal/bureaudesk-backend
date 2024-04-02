import { Error } from "mongoose";
import jwt from "jsonwebtoken";

export const verifyToken=async(token:string, secretKey:string)=>{
  try {
    const decodedToken = await jwt.verify(token, secretKey);
    console.log('Decoded token:', decodedToken);
    return decodedToken;
  } catch (error:any)
   {
    console.error('JWT verification failed:', error.message);
    throw error; // Rethrow the error if needed
  }
}

// Usage example
