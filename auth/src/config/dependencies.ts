import * as useCases from "../application/useCases"
import * as repositories from "../infrastructure/database/mongoDB/repositories"

export const dependencies={
    useCases,
    repositories
}