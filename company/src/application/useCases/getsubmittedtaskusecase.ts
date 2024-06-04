
export const getSubmittedTaskUseCase = (dependencies: any) => {
    const { repositories: { getSubmittedTaskRepo } } = dependencies;
    return {
        execute: async (data: any) => {
            try {
                return await getSubmittedTaskRepo(data);
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}