import { producer } from ".."; 


export const sendcomapanyid = async (
    data: any
) => {
    try {
        await producer.connect()
            const message = {
                topic: 'to-user',
                messages: [{
                    key: 'updateUser',
                    value: JSON.stringify(data)
                }]
            };
            await  producer.send(message);
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}
