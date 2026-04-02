import { MutationResolvers } from "./mutations";
import { QueryResolvers } from "./queries"

export const resolvers = {
    Query: { 
        ...QueryResolvers
    },

    Mutation: {
        ...MutationResolvers
    }
}