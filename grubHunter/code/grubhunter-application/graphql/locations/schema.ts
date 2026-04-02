import gql from "graphql-tag";
import mutationsSchema from "./mutations.gql";
import queriesSchema from "./queries.gql";
import customSchema from "./custom.gql";

export const typeDefs = gql`
    ${customSchema}

    type Query {
        ${queriesSchema}
    }
    
    type Mutation {
        ${mutationsSchema}
    }
`;