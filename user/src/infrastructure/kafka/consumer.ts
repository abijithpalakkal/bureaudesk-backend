import { consumer } from ".";
import { createsubscriber } from "./subscriber";

export const runConsumer = async () => {
    try {
        await consumer.connect()

        await consumer.subscribe({
            topic: 'to-user',
            fromBeginning: true
        })
        const subscriber: any = createsubscriber()
        
        await consumer.run({
            eachMessage: async ({message}) => {
                const {key, value} = message
                const subscriberData = JSON.parse(String(value))
                const subscriberMethod = String(key)
                console.log(subscriberData,subscriberMethod)
                
                
                try{
                    await subscriber[subscriberMethod](subscriberData);
                } catch(error: any) {
                    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
                    throw new Error(error?.message)
                }
            }
        })
    } catch (error: any) {
        throw new Error(error?.message)
    }
}

export const stopConsumer = async () => {
    await consumer.stop()
    await consumer.disconnect()
}