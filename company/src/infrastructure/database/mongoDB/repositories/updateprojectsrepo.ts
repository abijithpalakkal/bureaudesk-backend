import { projectModel} from "../models/projects";

export const updateProjectRepo = async (data: any) => {
  const { id, ...updatedobj } = data;
  console.log(id);
  console.log(updatedobj);
  
  try {
    const newTask = await projectModel.findByIdAndUpdate(id, updatedobj);

    return newTask;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
