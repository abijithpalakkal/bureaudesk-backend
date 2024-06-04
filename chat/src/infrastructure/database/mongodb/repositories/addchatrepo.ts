import { Chat } from "../models/chatSchema"

export const addChatRepo = async(obj: any) => {
  console.log("i am in reopositories")
  try {
    const response = await Chat.create(obj)
    return response
  } catch (error: any) {
    console.log(error.message)
    throw new Error(error.message)
  }
}