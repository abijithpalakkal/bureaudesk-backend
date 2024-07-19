import { submittedTask } from "../models/submittedtask"


export const submitTaskRepo = async (data: any) => {
  try {
    const newtask = await submittedTask.create(data)
    return newtask
  } catch (error: any) {
    throw new Error(error?.message)
  }
}
