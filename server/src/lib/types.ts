import { Collection, ObjectId, Double } from 'mongodb';

export interface Ingredient {
    quantity: Double;
    unit: string;
    name: string;
}

export interface Recipe {
    _id: ObjectId;
    title: string;
    image: string;
    description: string;
    ingredients?: {
        [key: string]: Ingredient[]
    };
    instructions?: string[];
}

export interface Database {
    recipes: Collection<Recipe>;
}