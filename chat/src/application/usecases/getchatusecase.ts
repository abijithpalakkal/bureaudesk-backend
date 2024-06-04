import { IDependencies } from "../interfaces/IDependencies";

export const getChatUseCase = (dependencies: any) => {
  const {repositories: {getChatRepo}} = dependencies;

  return {
    execute: async (id : any) => {
      return await getChatRepo(id)
    }
  }
}