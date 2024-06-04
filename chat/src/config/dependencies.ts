import * as useCases from "../application/usecases"
import * as repositories from "../infrastructure/database/mongodb/repositories"

export const dependencies={
    useCases,
    repositories
}