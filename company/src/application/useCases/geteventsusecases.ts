
export const getEventUseCase = (dependencies: any) => {
    const { repositories: { getEventRepo } } = dependencies;
    return {
        execute: async (data: any) => {
            try {
                return await getEventRepo(data);
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}