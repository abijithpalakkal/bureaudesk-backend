import { producer } from ".."; 


export const sendUserInfo = async (
    data: any
) => {
    try {
       
        await producer.connect()
            const message = {
                topic: 'to-auth',
                messages: [{
                    key: 'addUser',
                    value: JSON.stringify(data)
                }]
            };
            await  producer.send(message);
            console.log("❤️🚀😊😒🤣👌")
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}
