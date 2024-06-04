import { Message } from "../models/messageSchema"

export const getMessage = async(id: string) => {
  
  try {
    const response = await Message.find({conversationId: id})
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}