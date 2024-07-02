
export const getProjectUseCase = (dependencies: any) => {
    const { repositories: { getProjectRepo} } = dependencies;
    return {
        execute: async (data: any) => {
            try {
                return await getProjectRepo(data);
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}