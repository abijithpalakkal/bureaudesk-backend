import { Client }  from "../utils/redisClient";

export const storeOtp = async(email: any, otp: any):Promise<void> => {
    try{
        const key:any = `otp:${email}`;
        const ttl = 30;

        await Client.set(key,otp)
        await Client.expire(key,ttl)
        const value = await Client.get(key)
        console.log(`otp  ${value}stored for email ${email} with expiry of ${ttl} seconds`);   }catch(error:any) {
        console.error('error storing otp in redis',error?.message);
        throw new Error(error?.message)
    }
}