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
            io.to(chat).emit("message recieved", newMessage);
        })
    })
}

export default connectSocketIo;