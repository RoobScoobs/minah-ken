import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Ingredient {
        quantity: Int
        unit: String
        description: String
    }

    type Recipe {
        id: ID!
        title: String!
        image: String!
        description: String!
        ingredients: [Ingredient]
        instructions: [String]
    }

    type Query {
        recipes: [Recipe!]!
    }
`;