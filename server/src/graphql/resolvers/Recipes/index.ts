import { IResolvers } from 'apollo-server-express';
import { Database, Recipe, Ingredient } from '../../../lib/types';

export const recipeResolvers: IResolvers = {
    Query: {
        recipes: async (
            _root: undefined,
            _args: {},
            { db }: { db: Database }
        ): Promise<Recipe[]> => {
            return await db.recipes.find({}).toArray();
        }
    },
    Ingredient: {
        quantity: (ingredient: Ingredient): number => +ingredient.quantity
    }
};