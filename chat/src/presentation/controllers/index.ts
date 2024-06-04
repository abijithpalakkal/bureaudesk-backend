import {addChatController} from "../controllers/addchat"
import { getChatController } from "./getchat"


export const controllers = (dependencies: any) => {
    return {
        addchat: addChatController(dependencies),
        getchat:getChatController(dependencies)
    }
}