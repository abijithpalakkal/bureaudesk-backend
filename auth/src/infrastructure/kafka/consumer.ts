import { consumer } from ".";
import { createsubscriber } from "./suscriber";

export const runConsumer = async () => {
    try {
        await consumer.connect()

        await consumer.subscribe({
            topic: 'to-auth',
            fromBeginning: true
        })
        const subscriber: any = createsubscriber()
        
        await consumer.run({
            eachMessage: async ({message}) => {
                const {key, value} = message
                const subscriberData = JSON.parse(String(value))
                const subscriberMethod = String(key)
                try{
                    await subscriber[subscriberMethod](subscriberData);
                } catch(error: any) {
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