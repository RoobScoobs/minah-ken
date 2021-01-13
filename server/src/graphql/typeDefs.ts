import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Item {
        quantity: Float
        unit: String
        name: String
    }

    type Ingredient {
        name: String,
        items: [Item]
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