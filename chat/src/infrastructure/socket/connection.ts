import { Server as SocketIOServer, Socket } from "socket.io";
import { Server } from "http";
import { config } from 'dotenv';
config()

const socket = require("socket.io")

const connectSocketIo = (server: Server) => {
    console.log(process.env.FRONT_END_URL, 123)
    const io: Socket = socket(server, {

        cors: {
            origin: [process.env.FRONT_END_URL, 123],
            credentials: true,
        },
    });
    const userSocketMap: { [key: string]: string } = {};

    io.on("connection", (socket: Socket) => {
        console.log(`Socket connected`, socket.id);
        const userId: string = socket.handshake.query.userId as string;
        if (userId) {
            userSocketMap[userId] = socket.id;
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        socket.on("join chat", (room) => {
            socket.join(room);
            console.log("User Joined", room);
        });

        socket.on("new message", (newMessage) => {
            console.log(newMessage, "new Message");
            const chat = newMessage?.chatId;
            console.log("🚀 ~ file: connection.ts:32 ~ socket.on ~ chat:", chat)
            io.to(chat).emit("message recieved", newMessage.obj);
        })

        socket.on("disconnec", (id:string) => {
            delete userSocketMap[id];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
            console.log(`Socket disconnected`,id,87);
        });

        socket.on("videoCall", (data) => {
            console.log("hello chat in Videochat")
            const targetSocketId:any =userSocketMap[data.userId]
            console.log(targetSocketId)
            io.to(targetSocketId).emit('incomingCall', { data });
        });
        socket.on("global_message", (data:any) => {
          console.log(data,"connection")
          io.emit("getGlobalChat", data)
        });
    })
}

export default connectSocketIo;