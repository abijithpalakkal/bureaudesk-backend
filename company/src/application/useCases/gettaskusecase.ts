
export const getTaskUseCase = (dependencies: any) => {
    const { repositories: { getTaskRepo} } = dependencies;
    return {
        execute: async (data: any) => {
            try {
                return await getTaskRepo(data);
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}