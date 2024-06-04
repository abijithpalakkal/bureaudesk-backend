import { IDependencies } from "../interfaces/IDependencies";

export const addChatUseCase = (dependencies: any) => {
  const {repositories: {addChatRepo}} = dependencies;

  return {
    execute: async (id : any) => {
      return await addChatRepo(id)
    }
  }
}