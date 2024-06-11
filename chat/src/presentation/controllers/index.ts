import { sendMessage } from "../../infrastructure/database/mongodb/repositories"
import {addChatController} from "../controllers/addchat"
import { getChatController } from "./getchat"
import { getChatByIdController } from "./getchatbyid"
import { sendMessageController } from "./sendmessage"


export const controllers = (dependencies: any) => {
    return {
        addchat: addChatController(dependencies),
        getchat:getChatController(dependencies),
        sendMessage:sendMessageController(dependencies),
        getChatById:getChatByIdController(dependencies)
    }
}