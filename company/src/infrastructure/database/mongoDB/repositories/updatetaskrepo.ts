import { taskModel } from "../models/task";

export const updateTaskRepo = async (data: any) => {
  const { id, ...updatedobj } = data;
  console.log(id);
  console.log(updatedobj);
  
  try {
    const newTask = await taskModel.findByIdAndUpdate(id, {
      $set: { status: updatedobj.status }, // Update the status field
      $push: { comments: updatedobj.commemts } // Push a new comment into the comments array
    }, { new: true });

    return newTask;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
